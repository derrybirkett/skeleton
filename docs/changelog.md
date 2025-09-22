# Changelog / Release Notes

## [Unreleased]

## [1.1.0] - 2025-01-22
### Added:
- CMO role with marketing responsibilities and blog content creation
- Astro blog app (apps/blog) with automated feature announcement workflow
- Blog post enforcement in pre-commit hooks for new features
- Docker profile support for blog development (port 4321)
- WARP.md file for agent guidance and repository documentation
### Changed:
- Release workflow now requires blog posts for new features
- Pre-commit hooks validate both changelog and blog post updates
### Infrastructure:
- Added Nx build targets for blog development and production builds
- Docker compose blog service with hot reload support
