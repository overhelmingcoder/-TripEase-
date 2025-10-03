# Contributing to TripEase

Thank you for your interest in contributing to TripEase! We welcome contributions from the community and are grateful for your help in making this project better.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with the following information:

1. **Clear description** of the bug
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Screenshots** (if applicable)
5. **Environment details** (OS, browser, Node.js version)
6. **Error logs** (if any)

### Suggesting Features

We love feature suggestions! Please create an issue with:

1. **Feature description** and use case
2. **Why this feature would be valuable**
3. **Potential implementation approach** (if you have ideas)
4. **Mockups or examples** (if applicable)

### Code Contributions

#### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/TripEase.git
   cd TripEase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Add your API keys to .env.local
   ```

#### Development Guidelines

##### Code Style
- Use **TypeScript** for all new code
- Follow **ESLint** and **Prettier** configurations
- Use **meaningful variable names** and **comments**
- Write **clean, readable code**

##### Component Guidelines
- Use **functional components** with hooks
- Follow **React best practices**
- Use **Tailwind CSS** for styling
- Make components **accessible** (ARIA labels, keyboard navigation)

##### API Guidelines
- Use **Next.js API routes** for backend logic
- Implement **proper error handling**
- Add **input validation** using Zod
- Include **TypeScript types** for all API responses

##### Testing
- Write **unit tests** for utility functions
- Test **API endpoints** with proper error cases
- Ensure **responsive design** works on all devices
- Test **accessibility** with screen readers

#### Commit Guidelines

Use conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(weather): add 30-day forecast component
fix(api): handle invalid location input
docs(readme): update installation instructions
```

#### Pull Request Process

1. **Ensure your code works**
   ```bash
   npm run lint
   npm run build
   npm run dev
   ```

2. **Update documentation** if needed
3. **Add tests** for new features
4. **Update CHANGELOG.md** (if applicable)
5. **Create a pull request** with:
   - Clear title and description
   - Link to related issues
   - Screenshots (for UI changes)
   - Testing instructions

### Review Process

1. **Automated checks** must pass (linting, building, tests)
2. **Code review** by maintainers
3. **Testing** on different environments
4. **Approval** and merge

## 🏗️ Project Structure

```
TripEase/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── weather/       # Weather data endpoints
│   │   └── chat/          # AI chat endpoints
│   ├── Components/        # React components
│   │   ├── Weather/       # Weather-related components
│   │   ├── Maps/          # Map components
│   │   └── UI/            # Reusable UI components
│   ├── context/           # React context providers
│   ├── dashboard/         # Dashboard pages
│   └── utils/             # Utility functions
├── components/            # Shared UI components
├── lib/                   # Library configurations
├── models/                # Database models
├── types/                 # TypeScript definitions
└── public/                # Static assets
```

## 🧪 Testing

### Running Tests
```bash
# Lint code
npm run lint

# Type check
npm run type-check

# Build verification
npm run build

# Development server
npm run dev
```

### Testing Checklist
- [ ] Code passes linting
- [ ] TypeScript compilation succeeds
- [ ] Application builds without errors
- [ ] All features work as expected
- [ ] Responsive design works on mobile/desktop
- [ ] Accessibility standards met
- [ ] API endpoints handle errors gracefully

## 📝 Documentation

### Code Documentation
- Use **JSDoc comments** for functions and components
- Document **complex logic** and **business rules**
- Include **usage examples** for reusable components

### API Documentation
- Document **endpoint parameters** and **responses**
- Include **error codes** and **messages**
- Provide **example requests** and **responses**

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment Information**
   - OS and version
   - Browser and version
   - Node.js version
   - npm/yarn version

2. **Reproduction Steps**
   - Clear, numbered steps
   - Expected vs actual behavior
   - Screenshots or videos

3. **Error Information**
   - Console errors
   - Network errors
   - Stack traces

## 💡 Feature Requests

When suggesting features:

1. **Problem Statement**
   - What problem does this solve?
   - Who would benefit from this feature?

2. **Proposed Solution**
   - How should this feature work?
   - Any design considerations?

3. **Additional Context**
   - Similar features in other apps
   - Mockups or wireframes
   - Technical considerations

## 🏷️ Labels

We use labels to categorize issues and PRs:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `priority: high`: High priority items
- `priority: low`: Low priority items
- `status: in progress`: Currently being worked on
- `status: needs review`: Ready for review

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Discord**: [Join our community](https://discord.gg/tripease)
- **Email**: [Contact maintainers](mailto:maintainers@tripease.app)

## 🎉 Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub contributors** page

## 📄 License

By contributing to TripEase, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to TripEase! 🚀
