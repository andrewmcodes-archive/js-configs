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
- `pnpm changeset` - Create a new changeset for versioning
- `pnpm version` - Version packages based on changesets
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

This monorepo uses [Changesets](https://github.com/changesets/changesets) for version management and publishing.

### Creating a Changeset

When you make changes to a package, create a changeset:

```bash
pnpm changeset
```

Follow the prompts to:

1. Select which packages have changed
2. Choose the type of version bump (major, minor, patch)
3. Write a summary of the changes

### Publishing Packages

Publishing is automated via GitHub Actions:

1. Merge your PR with changesets to the `main` branch
2. The Release workflow will create a "Version Packages" PR
3. Merge the "Version Packages" PR
4. Packages will be automatically published to npm

### Manual Publishing

To publish manually (if needed):

```bash
pnpm release
```

This will:

1. Build all packages
2. Publish changed packages to npm

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run `pnpm ci` to ensure everything passes
6. Create a changeset with `pnpm changeset`
7. Submit a pull request

### Code Style

This project uses Prettier for code formatting. Run `pnpm format` before committing.

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Please follow this format for your commit messages.

## 📄 License

[MIT](LICENSE) © [Andrew Mason](https://andrewm.codes)

## 🔗 Links

- [GitHub Repository](https://github.com/andrewmcodes/js-configs)
- [Issue Tracker](https://github.com/andrewmcodes/js-configs/issues)
