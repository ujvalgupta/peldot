#!/usr/bin/env bash
# Installs the system libraries headless Chromium needs (Ubuntu 26.04).
# Run with: sudo bash scripts/install-browser-deps.sh
set -e
apt-get update
apt-get install -y \
  libnss3 libnspr4 \
  libatk1.0-0t64 libatk-bridge2.0-0t64 libatspi2.0-0t64 \
  libcups2t64 libdrm2 libgbm1 \
  libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 \
  libpangocairo-1.0-0 libcairo2 libasound2t64
echo "DONE: browser deps installed"
