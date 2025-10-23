# Contributing to ENERGY+ Clean Dashboard

Thank you for your interest in contributing to the ENERGY+ Clean Dashboard! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 1. Fork the Repository
- Click the "Fork" button on the GitHub repository page
- Clone your fork locally: `git clone https://github.com/yourusername/energy-plus-clean.git`

### 2. Create a Feature Branch
```bash
git checkout -b feature/amazing-feature
# or
git checkout -b fix/bug-fix
```

### 3. Make Your Changes
- Follow the coding standards outlined below
- Test your changes thoroughly
- Update documentation if needed

### 4. Commit Your Changes
```bash
git add .
git commit -m "Add amazing feature"
```

### 5. Push to Your Fork
```bash
git push origin feature/amazing-feature
```

### 6. Create a Pull Request
- Go to the original repository on GitHub
- Click "New Pull Request"
- Fill out the PR template
- Wait for review and feedback

## 📋 Coding Standards

### **HTML**
- Use semantic HTML5 elements
- Include proper alt text for images
- Use consistent indentation (2 spaces)
- Add comments for complex sections

### **CSS**
- Follow the Tesla-inspired design philosophy
- Use consistent naming conventions
- Group related styles together
- Use CSS custom properties for colors
- Mobile-first responsive design

### **JavaScript**
- Use ES6+ features
- Follow consistent naming conventions
- Add comments for complex functions
- Use meaningful variable names
- Handle errors gracefully

### **File Structure**
```
energy-plus-clean/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # All JavaScript
├── server.js           # Node.js server
├── package.json        # Dependencies
├── README.md           # Documentation
├── .gitignore          # Git ignore rules
└── LICENSE             # License file
```

## 🎨 Design Guidelines

### **Tesla-Inspired Aesthetic**
- **Clean & Minimal**: Lots of white space, simple layouts
- **Professional Typography**: SF Pro Display font family
- **High Contrast**: White text on black backgrounds
- **Neon Green Accents**: #00ff88 for highlights and active states
- **Smooth Animations**: Subtle transitions and hover effects

### **Color Palette**
```css
/* Primary Colors */
--tesla-black: #000000;
--tesla-white: #ffffff;
--tesla-gray: #888888;
--tesla-dark-gray: #333333;

/* Accent Colors */
--tesla-green: #00ff88;
--tesla-blue: #00ccff;
--tesla-orange: #ff6b35;
```

### **Typography**
- **Primary Font**: SF Pro Display, -apple-system, BlinkMacSystemFont
- **Fallback**: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold)

## 🧪 Testing

### **Manual Testing**
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Test on different devices (desktop, tablet, mobile)
- Test all interactive elements
- Verify responsive design

### **Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Pull Request Guidelines

### **PR Title Format**
```
feat: Add new AI content generation feature
fix: Fix responsive layout on mobile devices
docs: Update README with installation instructions
style: Improve Tesla-inspired button animations
refactor: Clean up JavaScript code structure
```

### **PR Description Template**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] All features working

## Screenshots
(If applicable, add screenshots)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Step-by-step instructions
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, device type
6. **Screenshots**: If applicable

## 💡 Feature Requests

When suggesting features:

1. **Description**: Clear description of the feature
2. **Use Case**: Why this feature would be useful
3. **Mockups**: Visual examples if possible
4. **Implementation**: Any technical considerations

## 📚 Documentation

### **README Updates**
- Keep installation instructions current
- Update feature descriptions
- Add new screenshots
- Update dependencies

### **Code Comments**
- Add comments for complex functions
- Explain Tesla design decisions
- Document API integrations
- Include usage examples

## 🏷️ Issue Labels

We use the following labels:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 🎯 Development Workflow

### **1. Planning**
- Check existing issues and PRs
- Discuss major changes in issues first
- Plan the implementation approach

### **2. Development**
- Create feature branch
- Implement changes
- Test thoroughly
- Update documentation

### **3. Review**
- Create pull request
- Address feedback
- Make necessary changes
- Get approval

### **4. Merge**
- Squash commits if needed
- Merge to main branch
- Delete feature branch
- Celebrate! 🎉

## 📞 Getting Help

If you need help:

- **GitHub Discussions**: For questions and ideas
- **GitHub Issues**: For bugs and feature requests
- **Email**: support@energyplus.com

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to ENERGY+ Clean Dashboard! 🚀
