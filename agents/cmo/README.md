# CMO (Chief Marketing Officer)

## Role Overview
The CMO is responsible for marketing strategy, content creation, and coordinating release announcements. A key responsibility is creating blog posts for feature releases as part of the standard release workflow.

## Responsibilities

### Primary
- **Blog Content Creation**: Write engaging blog posts for all new features added to the changelog
- **Release Announcements**: Coordinate marketing communications for product updates
- **Marketing Strategy**: Develop and maintain overall marketing approach

### Release Flow Integration
- **Feature Blog Posts**: When changelog entries are added for new features, CMO must create corresponding blog posts in `apps/blog/src/content/posts/`
- **Content Quality**: Ensure blog posts are engaging, technically accurate, and aligned with product messaging
- **Publication Timing**: Blog posts should be ready before feature releases go live

## Workflow Integration

The CMO is integrated into the standard release process:
1. Developer adds feature to changelog
2. Pre-commit hooks verify both changelog and blog post are updated
3. CMO reviews and approves blog content
4. Feature is released with marketing content ready

## Reporting Structure
Reports to CEO, coordinates with PM for feature details and CTO for technical accuracy.