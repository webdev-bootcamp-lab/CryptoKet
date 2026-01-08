# How to contribute

Thank you for your interest in contributing to CryptoKet! This document provides guidelines and instructions for contributing to this NFT marketplace project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the project and community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Git for version control
- Basic knowledge of HTML, CSS, and JavaScript

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/CryptoKet.git
   cd CryptoKet
   ```
3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/WeBdeV-Bootcamp/CryptoKet.git
   ```
4. **Open the project** in your preferred code editor
5. **Open index.html** in your browser to view the application

## Project Structure

```
CryptoKet/
├── index.html              # Homepage
├── create_item.html        # Create NFT item page
├── item.html              # Individual NFT item page
├── profile.html           # User profile page
├── src/
│   ├── assets/
│   │   ├── icons/         # Icon assets
│   │   └── images/        # Image assets
│   ├── components/
│   │   ├── footer.html    # Footer component
│   │   └── navbar.html    # Navigation component
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   └── js/
│       └── index.js       # Main JavaScript file
├── Contributing.md        # This file
├── README.md             # Project documentation
└── LICENSE               # MIT License
```

## Development Workflow

### Creating a New Feature or Fix

1. **Sync your fork** with the upstream repository:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a new branch** for your work:
   ```bash
   git checkout -b CRYP-XX-feature-name
   ```
   Use the naming convention: `CRYP-XX-descriptive-name` where XX is the issue number.

3. **Make your changes** following the coding standards

4. **Test your changes** thoroughly in multiple browsers

5. **Commit your changes** following the commit guidelines

6. **Push to your fork**:
   ```bash
   git push origin CRYP-XX-feature-name
   ```

7. **Create a Pull Request** from your fork to the main repository

## Coding Standards

### HTML

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Maintain proper indentation (2 spaces)
- Add meaningful alt text to images
- Use descriptive class names
- Keep HTML files well-structured and organized

Example:
```html
<section class="nft-gallery">
  <div class="container">
    <h2 class="gallery-title">Featured NFTs</h2>
    <div class="gallery-grid">
      <!-- Gallery items -->
    </div>
  </div>
</section>
```

### CSS

- Use BEM naming convention for classes (Block__Element--Modifier)
- Group related styles together
- Use CSS custom properties for colors, spacing, and other repeated values
- Write mobile-first responsive CSS
- Comment complex styling logic
- Maintain consistent spacing and indentation (2 spaces)

Example:
```css
:root {
  --primary-color: #6c5ce7;
  --text-dark: #2d3436;
  --spacing-md: 1.5rem;
}

.card {
  padding: var(--spacing-md);
  background-color: white;
}

.card__title {
  color: var(--text-dark);
  font-size: 1.25rem;
}

.card__title--featured {
  color: var(--primary-color);
}
```

### JavaScript

- Use ES6+ features (const, let, arrow functions, etc.)
- Write clear, self-documenting code
- Add comments for complex logic
- Use meaningful variable and function names
- Follow camelCase naming convention
- Handle errors appropriately
- Keep functions small and focused on a single task

Example:
```javascript
// Fetch and display NFT items
const fetchNFTItems = async () => {
  try {
    const response = await fetch('/api/nfts');
    const items = await response.json();
    displayItems(items);
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    showErrorMessage('Failed to load NFT items');
  }
};
```

## Commit Guidelines

### Commit Message Format

Use clear and descriptive commit messages following this format:

```
[CRYP-XX] Brief description (50 chars or less)

More detailed explanation if needed. Wrap at 72 characters.
Explain what changes were made and why.

- Bullet points for multiple changes
- Keep each point concise
```

### Examples of Good Commit Messages

```
[CRYP-15] Add responsive navigation menu

Implemented mobile-friendly hamburger menu with smooth transitions.
The menu collapses on screens below 768px and expands on larger screens.

- Added hamburger icon
- Implemented toggle functionality
- Added CSS transitions for smooth UX
```

```
[CRYP-23] Fix image loading on item detail page

Corrected the image path resolution that was causing 404 errors.
Images now load correctly from the assets/images directory.
```

### Commit Message Types

- **[CRYP-XX] Add** - New feature or functionality
- **[CRYP-XX] Fix** - Bug fix
- **[CRYP-XX] Update** - Update existing functionality
- **[CRYP-XX] Refactor** - Code refactoring without changing functionality
- **[CRYP-XX] Style** - CSS/styling changes
- **[CRYP-XX] Docs** - Documentation changes
- **[CRYP-XX] Test** - Adding or updating tests

## Pull Request Process

1. **Update documentation** if your changes require it

2. **Ensure all files are properly formatted** and follow coding standards

3. **Test your changes** across different browsers (Chrome, Firefox, Safari, Edge)

4. **Write a clear PR description** that includes:
   - What changes were made
   - Why these changes were necessary
   - Any relevant issue numbers (Closes #XX)
   - Screenshots for UI changes

5. **PR Template**:
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] UI/UX improvement
   - [ ] Documentation update

   ## Related Issue
   Closes #XX

   ## Screenshots (if applicable)
   [Add screenshots here]

   ## Testing
   - [ ] Tested in Chrome
   - [ ] Tested in Firefox
   - [ ] Tested on mobile
   - [ ] Tested responsiveness

   ## Checklist
   - [ ] Code follows project coding standards
   - [ ] Comments added for complex logic
   - [ ] Documentation updated if needed
   - [ ] No console errors
   ```

6. **Wait for review** - A maintainer will review your PR and may request changes

7. **Make requested changes** if any, and push updates to the same branch

8. **Once approved**, your PR will be merged into the main branch

## Reporting Issues

### Before Creating an Issue

- Search existing issues to avoid duplicates
- Check if the issue has already been fixed in the latest version

### Creating an Issue

Use the following template:

```markdown
## Issue Description
Clear and concise description of the issue

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Screenshots
If applicable, add screenshots

## Environment
- Browser: [e.g., Chrome 96]
- OS: [e.g., Windows 10, macOS 12]
- Device: [e.g., Desktop, iPhone 12]

## Additional Context
Any other relevant information
```

## Areas Where You Can Contribute

- **UI/UX Improvements**: Enhance the design and user experience
- **Responsive Design**: Improve mobile and tablet layouts
- **Accessibility**: Add ARIA labels, keyboard navigation, screen reader support
- **Performance**: Optimize images, CSS, and JavaScript
- **Browser Compatibility**: Test and fix issues across different browsers
- **Documentation**: Improve README, add code comments, create guides
- **New Features**: Add new functionality (check open issues first)
- **Bug Fixes**: Fix reported bugs and issues

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with your question
- Check existing discussions
- Review closed PRs for examples

## License

By contributing to CryptoKet, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to CryptoKet! Your efforts help make this project better for everyone. 🚀

