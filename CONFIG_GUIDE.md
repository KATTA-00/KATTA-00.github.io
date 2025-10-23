# Website Configuration Guide

This guide explains how to use the configuration system to easily update your academic website.

## Configuration File

The main configuration is located in `assets/js/config.js`. This file contains all the customizable content for your website.

## Key Configuration Options

### Personal Information

```javascript
name: "Kanishka Gunawardana",
title: "Computer Engineering Researcher & Educator",
email: "kanishkagunawarthana@gmail.com",
location: "University of Peradeniya, Sri Lanka",
```

### Research Specializations

Update the order and content of your specializations:

```javascript
specializations: [
  "Computer Architecture",
  "Embedded Systems",
  "Neuromorphic Computing"
],
```

### Social Media Links

Update your social media profiles:

```javascript
socialLinks: {
  github: "https://github.com/KATTA-00",
  linkedin: "https://www.linkedin.com/in/kanishka-gunawardana-285aa4201",
  googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
  email: "mailto:kanishkagunawarthana@gmail.com"
},
```

### Document Links

Update paths to your documents:

```javascript
documents: {
  cvPhd: "docs/Kanishka_Gunawardana_CV_PHD.pdf",
  cvStandard: "docs/Kanishka_Gunawardana_CV.pdf",
  transcript: "docs/Kanishka_Gunawardana_Transcript.pdf",
  papers: "docs/Papers/",
  certificates: "docs/Certificates/"
},
```

### Quick Stats

Customize the hero section stats:

```javascript
quickStats: {
  recentPublications: "IEEE ICAC 2024",
  researchGroups: "PeraMorphIQ, ESCAL"
},
```

### Research Groups

Add or modify research groups:

```javascript
researchGroups: [
  {
    name: "PeraMorphIQ",
    focus: "Neuromorphic Computing Research Group",
    description: "Developing brain-inspired computing systems for edge applications"
  },
  {
    name: "ESCAL",
    focus: "Embedded Systems and Computer Architecture Lab",
    description: "Advanced research in embedded systems and computer architecture"
  }
],
```

### Publications

Add new publications:

```javascript
publications: [
  {
    title: "JPEG Encoding Optimization through Pipelined MPSoC Architecture",
    venue: "IEEE ICAC 2024",
    authors: "Kanishka Gunawardana, et al.",
    type: "Conference Paper",
    link: "docs/Papers/",
    ieeeLink: "#"
  }
],
```

### Projects

Update your featured projects:

```javascript
projects: [
  {
    title: "SNAP-V: RISC-V SoC with Neuromorphic Acceleration",
    type: "Final Year Thesis",
    tags: ["RISC-V", "Neuromorphic", "SoC"],
    description: "Project description here..."
  }
],
```

### Theme Colors

Customize the website colors:

```javascript
theme: {
  primaryColor: "#1e3a8a",
  secondaryColor: "#3b82f6",
  accentColor: "#10b981",
  textDark: "#1f2937",
  textLight: "#6b7280",
  bgLight: "#f8fafc",
  bgWhite: "#ffffff"
}
```

## How to Make Changes

1. **Edit config.js**: Open `assets/js/config.js` and modify the values you want to change.

2. **Automatic Updates**: The website automatically loads these configurations and updates the content.

3. **Manual HTML Updates**: For major structural changes, you may still need to edit the HTML files directly.

## Adding New Content

### New Research Group

Add to the `researchGroups` array:

```javascript
{
  name: "New Lab Name",
  focus: "Research Focus Area",
  description: "Description of the lab's work"
}
```

### New Publication

Add to the `publications` array:

```javascript
{
  title: "Your Paper Title",
  venue: "Conference/Journal Name",
  authors: "Author List",
  type: "Conference Paper/Journal Article",
  link: "path/to/paper.pdf",
  ieeeLink: "https://ieeexplore.ieee.org/document/..."
}
```

### New Social Link

Add to the `socialLinks` object:

```javascript
researchgate: "https://www.researchgate.net/profile/your-profile",
```

## File Structure

```
assets/
├── js/
│   ├── config.js                 # Main configuration file
│   ├── site-config-manager.js    # Configuration manager
│   └── main.js                   # Main JavaScript file
├── css/
│   └── style.css                 # Main styles
└── ...
```

## Tips

1. **Backup**: Always backup your config.js before making major changes.

2. **Testing**: Test your changes by refreshing the website after editing config.js.

3. **Order Matters**: The order of items in arrays (like specializations) determines their display order.

4. **URLs**: Make sure all URLs and file paths are correct and accessible.

5. **Validation**: Use a JSON validator if you're unsure about syntax.

## Troubleshooting

- **Changes not showing**: Clear your browser cache and refresh
- **JavaScript errors**: Check the browser console for syntax errors in config.js
- **Broken links**: Verify all file paths and URLs are correct

This configuration system makes it easy to keep your academic website updated without needing to edit HTML files for most changes.
