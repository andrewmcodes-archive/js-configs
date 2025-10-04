# Contributing to js-configs

Thank you for your interest in contributing to js-configs! This document provides guidelines and instructions for contributing to this monorepo.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Setup

1. Fork and clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/js-configs.git
cd js-configs
```

2. Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

3. Install dependencies:

```bash
pnpm install
```

4. Run tests to ensure everything is working:

```bash
pnpm test
```

## Development Workflow

### Making Changes

1. Create a new branch for your feature or fix:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes in the appropriate package under `packages/`

3. Add tests for your changes

4. Run the test suite:

```bash
pnpm test
```

5. Ensure your code follows our style guide:

```bash
pnpm lint
pnpm format
```

### Creating a PR with Labels

When you make changes that should be included in a release, add appropriate labels to your PR:

#### Version Labels

Use these labels to indicate the type of release:

- **major** - Breaking changes (1.0.0 → 2.0.0)
- **minor** - New features, backwards compatible (1.0.0 → 1.1.0)
- **patch** - Bug fixes, backwards compatible (1.0.0 → 1.0.1)
- **skip-release** - Skip creating a release for this PR
- **internal** - Internal changes (no release)
- **documentation** - Documentation changes (no release)

Follow [Semantic Versioning](https://semver.org/) when choosing the appropriate label.

### Submitting a Pull Request

1. Push your changes to your fork:

```bash
git push origin feature/your-feature-name
```

2. Open a Pull Request on GitHub

3. Add the appropriate version label to your PR

4. Ensure all CI checks pass

5. Wait for review from maintainers

## Package Structure

Each package in this monorepo should have:

- `package.json` - Package metadata and dependencies
- `README.md` - Package documentation
- `CHANGELOG.md` - Package-specific changelog
- Tests (typically `*.test.js` files)
- Source code

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for a specific package
pnpm --filter @andrewmcodes/prettier-config test
```

### Writing Tests

- Place test files alongside source files with `.test.js` extension
- Use Jest as the testing framework
- Aim for high test coverage
- Test edge cases and error conditions

## Code Style

### Formatting

We use Prettier for code formatting with a custom configuration:

```bash
# Check formatting
pnpm lint

# Fix formatting issues
pnpm format
```

### Type Safety with JSDoc

We use JSDoc comments and TypeScript's type checking to improve code quality and developer experience without requiring a build step.

#### Adding Type Annotations

All configuration entry files should include:

1. **Type checking directive** at the top of the file:

```javascript
// @ts-check
```

2. **JSDoc type annotations** for exported configurations:

**Prettier configuration:**

```javascript
// @ts-check

/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
};

module.exports = config;
```

**Commitlint configuration:**

```javascript
// @ts-check

/** @type {import("@commitlint/types").UserConfig} */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // ...
  },
};

module.exports = config;
```

**ESLint configuration (flat config):**

```javascript
// @ts-check

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  // ...
];

module.exports = config;
```

#### Validating Types

Before committing, validate your JSDoc types:

```bash
# Install TypeScript if not already installed
pnpm add -Dw typescript

# Run type checking
pnpm exec tsc --noEmit
```

This will check all JavaScript files with `// @ts-check` for type errors without emitting any files.

#### Benefits

- **IntelliSense**: Get autocomplete and inline documentation in your editor
- **Type Safety**: Catch configuration errors before runtime
- **Documentation**: JSDoc comments serve as inline documentation
- **No Build Step**: Works directly with JavaScript files

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build process or auxiliary tool changes

Examples:

```
feat(prettier-config): add new formatting rule
fix(commitlint-config): resolve rule conflict
docs: update contributing guidelines
chore: update dependencies
```

## Release Process

Releases are automated using Auto and GitHub Actions:

1. Create a PR with your changes
2. Add a version label to your PR (major, minor, patch, etc.)
3. Merge your PR to `main`
4. Auto will automatically create a release and publish to npm

### Manual Release (if needed)

```bash
# Build all packages
pnpm build

# Publish all packages
pnpm release
```

## Working with Individual Packages

### Installing Dependencies for a Package

```bash
pnpm --filter @andrewmcodes/prettier-config add some-dependency
pnpm --filter @andrewmcodes/prettier-config add -D some-dev-dependency
```

### Running Scripts for a Package

```bash
pnpm --filter @andrewmcodes/prettier-config test
pnpm --filter @andrewmcodes/prettier-config lint
```

### Publishing a Single Package

```bash
pnpm --filter @andrewmcodes/prettier-config publish
```

## Adding a New Package

1. Create a new directory under `packages/`
2. Initialize with `package.json`
3. Add to workspace in `pnpm-workspace.yaml` (already includes `packages/*`)
4. Follow the existing package structure
5. Add appropriate tests
6. Update root README.md to list the new package

## Questions or Problems?

- Open an issue on GitHub
- Reach out to the maintainers

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to foster an inclusive and welcoming community.

## License

By contributing to js-configs, you agree that your contributions will be licensed under the MIT License.
