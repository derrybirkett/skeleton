#!/usr/bin/env bash
set -euo pipefail

echo "🔍 Running repo checks..."
python3 tools/check_changelog.py
echo "✅ Checks passed."
