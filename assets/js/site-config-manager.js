// Site Configuration Utility Functions
class SiteConfigManager {
  constructor() {
    this.config = window.siteConfig || {};
  }

  // Get specializations as a formatted string
  getSpecializationsString() {
    if (!this.config.specializations) return "";
    return this.config.specializations.join(" • ");
  }

  // Get research groups as a formatted string
  getResearchGroupsString() {
    if (!this.config.quickStats?.researchGroups) return "";
    return this.config.quickStats.researchGroups;
  }

  // Get social media links
  getSocialLink(platform) {
    return this.config.socialLinks?.[platform] || "#";
  }

  // Get document links
  getDocumentLink(docType) {
    return this.config.documents?.[docType] || "#";
  }

  // Update page content dynamically
  updatePageContent() {
    // Update specializations
    const specializationEl = document.querySelector(".specialization");
    if (specializationEl && this.config.specializations) {
      const icon = '<i class="bi bi-cpu"></i> ';
      specializationEl.innerHTML = icon + this.getSpecializationsString();
    }

    // Update quick stats
    const quickStatsEl = document.querySelector(".quick-stats-content");
    if (quickStatsEl && this.config.quickStats) {
      quickStatsEl.innerHTML = `
        <p><strong>Recent Publications:</strong> ${this.config.quickStats.recentPublications}</p>
        <p><strong>Research Groups:</strong> ${this.config.quickStats.researchGroups}</p>
      `;
    }

    // Update social links
    this.updateSocialLinks();

    // Update document links
    this.updateDocumentLinks();
  }

  updateSocialLinks() {
    const socialLinks = {
      github: ".github",
      linkedin: ".linkedin",
      googleScholar: ".google-scholar",
      email: ".email-link",
    };

    Object.entries(socialLinks).forEach(([key, selector]) => {
      const elements = document.querySelectorAll(`a${selector}`);
      elements.forEach((el) => {
        const link = this.getSocialLink(key);
        if (link !== "#") {
          el.href = link;
        }
      });
    });
  }

  updateDocumentLinks() {
    const docLinks = {
      cvPhd: ".cv-phd-link",
      cvStandard: ".cv-standard-link",
      transcript: ".transcript-link",
      papers: ".papers-link",
      certificates: ".certificates-link",
    };

    Object.entries(docLinks).forEach(([key, selector]) => {
      const elements = document.querySelectorAll(`a${selector}`);
      elements.forEach((el) => {
        const link = this.getDocumentLink(key);
        if (link !== "#") {
          el.href = link;
        }
      });
    });
  }

  // Initialize when DOM is loaded
  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () =>
        this.updatePageContent()
      );
    } else {
      this.updatePageContent();
    }
  }
}

// Initialize site config manager
const configManager = new SiteConfigManager();
configManager.init();
