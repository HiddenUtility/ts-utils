# AI Agent Instructions for ts-utils

## 1. Basic Rules
- Always use `pnpm` for any package management operations.
- Ensure all new exported functions, classes, or components have JSDoc comments.
- Run `bash scripts/quality_guard.sh` before considering a task complete.
- Follow the project's directory structure strictly.

## 2. Project Overview
- **Name**: `ts-utils`
- **Goal**: A high-performance, portable TypeScript utility library, including React components.
- **Runtime**: Node.js

## 3. Tech Stack
- **Language**: TypeScript
- **Package Manager**: `pnpm`
- **Build Tool**: `tsup` (generates both ESM and CJS)
- **Test Runner**: `vitest`
- **Linter & Formatter**: `biome`

## 4. Repository Structure
- `src/`: Main source code. Organize by category (e.g., `src/array/`, `src/string/`, `src/react/`).
- `scripts/`: Automation scripts.
- `.github/workflows/`: GitHub Actions configuration.

## 5. Coding Conventions
- **Naming**:
    - Functions/Variables: `camelCase`
    - React Components: `PascalCase`
    - Types/Interfaces: `PascalCase`
- **Documentation**: Every exported member MUST have a JSDoc comment describing its purpose, parameters, and return value.
- **Types**: Prefer explicit type annotations for all exported members to ensure clarity and better IDE support.

## 6. Quality Guard
- All changes must pass the quality guard.
- Execute: `bash scripts/quality_guard.sh`
- The script performs:
    1. `pnpm biome check --apply` (linting and formatting)
    2. `pnpm vitest run` (unit tests)

## 7. Git Rules
- **Commit Messages**: Use Conventional Commits (e.g., `feat: ...`, `fix: ...`, `docs: ...`, `chore: ...`).
- **Branching**: Create feature-specific branches for development.

## 8. CI/CD
- GitHub Actions will be configured to run `scripts/quality_guard.sh` on every Pull Request and every push to the `main` branch.

## 9. Prohibitions
- NEVER use `npm` or `yarn`.
- NEVER use `eslint` or `prettier` (use `biome` instead).
- DO NOT add new top-level directories without consultation.
- DO NOT omit JSDoc for exported members.

## 10. Completion Criteria
- Code is placed in the appropriate `src/` subdirectory.
- JSDoc is present for all exported members.
- `bash scripts/quality_guard.sh` executes successfully.
- `pnpm tsup` builds the project without errors.
