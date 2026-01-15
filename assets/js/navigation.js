/* ========================================
   Navigation JavaScript
   Smooth Scroll & Mobile Sidebar
   ======================================== */

(function() {
  'use strict';

  // DOM Elements
  let sidebar = null;
  let sidebarOverlay = null;
  let mobileMenuToggle = null;
  let navLinks = null;

  // State
  let isSidebarOpen = false;

  // Initialize DOM references
  function initDOMReferences() {
    sidebar = document.querySelector('.sidebar');
    sidebarOverlay = document.querySelector('.sidebar-overlay');
    mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
  }

  // Toggle sidebar (mobile)
  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    
    if (sidebar) {
      sidebar.classList.toggle('open', isSidebarOpen);
    }
    
    if (sidebarOverlay) {
      sidebarOverlay.classList.toggle('active', isSidebarOpen);
    }
    
    // Update toggle button icon
    if (mobileMenuToggle) {
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.className = isSidebarOpen ? 'bi bi-x-lg' : 'bi bi-list';
      }
    }

    // Prevent body scroll when sidebar is open
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
  }

  // Close sidebar
  function closeSidebar() {
    if (isSidebarOpen) {
      toggleSidebar();
    }
  }

  // Smooth scroll to section
  function scrollToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Get header height for offset (mobile only)
      const mobileHeader = document.querySelector('.mobile-header');
      const offset = mobileHeader && window.getComputedStyle(mobileHeader).display !== 'none' 
        ? mobileHeader.offsetHeight + 20 
        : 20;

      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Update active nav link based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY;

    // Get header height for offset
    const mobileHeader = document.querySelector('.mobile-header');
    const offset = mobileHeader && window.getComputedStyle(mobileHeader).display !== 'none' 
      ? mobileHeader.offsetHeight + 100 
      : 100;

    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - offset;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Handle nav link click
  function handleNavClick(e) {
    const href = e.currentTarget.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      // Close sidebar on mobile
      closeSidebar();
      
      // Small delay to allow sidebar to close
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    }
  }

  // Handle escape key
  function handleEscapeKey(e) {
    if (e.key === 'Escape' && isSidebarOpen) {
      closeSidebar();
    }
  }

  // Debounce function for scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Setup event listeners
  function setupEventListeners() {
    // Mobile menu toggle
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', toggleSidebar);
    }

    // Sidebar overlay click to close
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Nav link clicks
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Scroll spy - update active nav on scroll
    window.addEventListener('scroll', debounce(updateActiveNavLink, 50));

    // Scroll reveal animations
    window.addEventListener('scroll', debounce(revealOnScroll, 50));

    // Escape key to close sidebar
    document.addEventListener('keydown', handleEscapeKey);

    // Handle resize - close sidebar if window becomes large
    window.addEventListener('resize', debounce(() => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        closeSidebar();
      }
    }, 100));
  }

  // Terminal typing animation
  function initTerminalTyping() {
    const terminalText = document.getElementById('terminal-text');
    if (!terminalText) return;

    const commands = [
      'whoami → Hardware-Software Co-Design Engineer',
      'cat skills.txt → Verilog | RISC-V | Python | C++',
      'ls projects/ → SNAP-V, RV32IM, MPSoC...',
      'echo $GPA → 4.0/4.0 (Rank #1)',
      './research --status → 2 Publications, 1 Thesis'
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
      const currentCommand = commands[commandIndex];
      
      if (isPaused) {
        setTimeout(type, 1500);
        isPaused = false;
        isDeleting = true;
        return;
      }

      if (isDeleting) {
        terminalText.textContent = currentCommand.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          commandIndex = (commandIndex + 1) % commands.length;
        }
        setTimeout(type, 30);
      } else {
        terminalText.textContent = currentCommand.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentCommand.length) {
          isPaused = true;
        }
        setTimeout(type, 50);
      }
    }

    // Start typing after a short delay
    setTimeout(type, 1000);
  }

  // Scroll reveal animation
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }

  // Initialize
  function init() {
    initDOMReferences();
    setupEventListeners();
    updateActiveNavLink();
    initTerminalTyping();
    revealOnScroll(); // Initial check
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose functions globally
  window.toggleSidebar = toggleSidebar;
  window.closeSidebar = closeSidebar;
})();
