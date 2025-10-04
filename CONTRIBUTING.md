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

### Creating a Changeset

When you make changes that should be included in a release, create a changeset:

```bash
pnpm changeset
```

This will:

1. Ask which packages have changed
2. Ask what type of version bump is needed (major, minor, patch)
3. Prompt you to write a summary of the changes

The changeset will be included in your PR and used during the release process.

#### Version Bump Guidelines

Follow [Semantic Versioning](https://semver.org/):

- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features, backwards compatible
- **Patch** (1.0.0 → 1.0.1): Bug fixes, backwards compatible

### Submitting a Pull Request

1. Push your changes to your fork:

```bash
git push origin feature/your-feature-name
```

2. Open a Pull Request on GitHub

3. Ensure all CI checks pass

4. Wait for review from maintainers

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

Releases are automated using Changesets and GitHub Actions:

1. Merge PRs with changesets to `main`
2. GitHub Actions will create a "Version Packages" PR
3. Merge the "Version Packages" PR
4. Packages will be automatically published to npm

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
