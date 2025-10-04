# js-configs

[![CI](https://github.com/andrewmcodes/js-configs/actions/workflows/ci.yml/badge.svg)](https://github.com/andrewmcodes/js-configs/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

JavaScript Tooling Configuration Monorepo - A collection of shareable configuration packages for JavaScript projects.

## 📦 Packages

This monorepo contains the following packages:

| Package                                                         | Version                                                              | Description                        |
| --------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------- |
| [@andrewmcodes/prettier-config](./packages/prettier-config)     | ![npm](https://img.shields.io/npm/v/@andrewmcodes/prettier-config)   | Shareable Prettier configuration   |
| [@andrewmcodes/commitlint-config](./packages/commitlint-config) | ![npm](https://img.shields.io/npm/v/@andrewmcodes/commitlint-config) | Shareable commitlint configuration |

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install dependencies
pnpm install
```

## 📜 Scripts

### Root Level Commands

- `pnpm build` - Build all packages
- `pnpm test` - Run tests for all packages
- `pnpm lint` - Lint all packages
- `pnpm format` - Format all files with Prettier
- `pnpm typecheck` - Type check with JSDoc annotations
- `pnpm ci` - Run lint, test, and typecheck (used in CI)
- `pnpm version` - Calculate version bumps based on PR labels
- `pnpm release` - Build and publish packages

### Package-Specific Commands

You can also run commands for individual packages:

```bash
# Run tests for a specific package
pnpm --filter @andrewmcodes/prettier-config test

# Lint a specific package
pnpm --filter @andrewmcodes/commitlint-config lint
```

## 🔄 Versioning & Publishing

This monorepo uses [Auto](https://intuit.github.io/auto/) for version management and publishing.

### Release Process

Publishing is automated via GitHub Actions and PR labels:

1. Create a PR with your changes
2. Add a label to the PR to indicate the type of release:
   - `major` - Breaking changes (1.0.0 → 2.0.0)
   - `minor` - New features (1.0.0 → 1.1.0)
   - `patch` - Bug fixes (1.0.0 → 1.0.1)
   - `skip-release` - Skip creating a release
   - `internal` - Internal changes (no release)
   - `documentation` - Documentation changes (no release)
3. Merge your PR to the `main` branch
4. Auto will automatically create a release and publish to npm

### Manual Publishing

To publish manually (if needed):

```bash
pnpm release
```

This will:

1. Build all packages
2. Create releases and publish changed packages to npm

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run `pnpm ci` to ensure everything passes
6. Submit a pull request
7. Add appropriate labels to your PR (major, minor, patch, etc.)

### Code Style

This project uses Prettier for code formatting. Run `pnpm format` before committing.

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Please follow this format for your commit messages.

## 📄 License

[MIT](LICENSE) © [Andrew Mason](https://andrewm.codes)

## 🔗 Links

- [GitHub Repository](https://github.com/andrewmcodes/js-configs)
- [Issue Tracker](https://github.com/andrewmcodes/js-configs/issues)
