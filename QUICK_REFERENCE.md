# Quick Reference

## Common Commands

### Development

```bash
# Install dependencies
pnpm install

# Run tests for all packages
pnpm test

# Run tests for a specific package
pnpm --filter @andrewmcodes/prettier-config test
pnpm --filter @andrewmcodes/commitlint-config test

# Lint all packages
pnpm lint

# Format all files
pnpm format

# Build all packages
pnpm build

# Run CI checks (lint + test)
npm run ci
```

### Versioning

```bash
# Create a changeset
pnpm changeset

# Version packages (apply changesets)
pnpm version

# Check changeset status
pnpm changeset status
```

### Publishing

```bash
# Publish all changed packages (after building)
pnpm release

# Publish a specific package
pnpm --filter @andrewmcodes/prettier-config publish
```

### Package Management

```bash
# Add a dependency to a package
pnpm --filter @andrewmcodes/prettier-config add lodash

# Add a dev dependency to a package
pnpm --filter @andrewmcodes/prettier-config add -D jest

# Add a dependency to the root (for tooling)
pnpm add -Dw prettier

# List all packages
pnpm list -r --depth 0

# Check for outdated dependencies
pnpm outdated -r
```

### Workspace Commands

```bash
# Run a script in all packages
pnpm -r run build
pnpm -r run test

# Run a script in packages matching a pattern
pnpm --filter "*-config" test

# Run scripts in parallel (default for pnpm -r)
pnpm -r --parallel run build
```

## Package Scripts

Each package has these scripts available:

- `build` - Build the package (currently just echoes message)
- `test` - Run Jest tests
- `lint` - Check code formatting with Prettier

## GitHub Actions

### CI Workflow

Runs on every push and PR:
- Lints all packages
- Tests all packages
- Builds all packages

### Release Workflow

Runs on push to main:
- Creates/updates a "Version Packages" PR if there are changesets
- Publishes packages to npm when the PR is merged

## Troubleshooting

### Clear cache and reinstall

```bash
pnpm store prune
rm -rf node_modules packages/*/node_modules
pnpm install
```

### Check workspace configuration

```bash
pnpm list -r
```

### Verify changeset configuration

```bash
cat .changeset/config.json
```

## File Structure

```
js-configs/
├── .changeset/           # Changesets configuration and pending changes
├── .github/workflows/    # GitHub Actions workflows
├── packages/
│   ├── commitlint-config/
│   │   ├── src/
│   │   │   ├── index.js       # Main config file
│   │   │   ├── index.d.ts     # TypeScript definitions
│   │   │   └── index.test.js  # Tests
│   │   ├── package.json
│   │   └── README.md
│   └── prettier-config/
│       ├── index.js           # Entry point
│       ├── prettier.config.js # Config
│       ├── index.test.js      # Tests
│       ├── package.json
│       └── README.md
├── package.json          # Root package.json
├── pnpm-workspace.yaml   # Workspace configuration
└── pnpm-lock.yaml        # Lock file
```
