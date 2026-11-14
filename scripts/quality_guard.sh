#!/bin/bash
set -e

echo "--- Running Biome (lint & format) ---"
pnpm biome check --apply .

echo "--- Running Vitest ---"
pnpm vitest run

echo "--- Quality guard passed! ---"
