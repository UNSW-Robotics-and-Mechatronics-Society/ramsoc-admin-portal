#!/usr/bin/env bash
set -euo pipefail

# Root of the monorepo
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ADMIN_DIR="$ROOT_DIR/apps/admin"
CLIENT_DIR="$ROOT_DIR/apps/client"

echo "🔑 Pulling environment variables from Vercel for both projects..."
echo "---------------------------------------------------------------"

# Helper function
pull_env() {
  local app_dir=$1
  local vercel_project_id=$2

  echo "📦 Linking Vercel project for '$vercel_project_id'..."
  cd "$app_dir"
  vercel link --yes --cwd "$app_dir" --project "$vercel_project_id" || true

  echo "⬇️  Pulling env for $vercel_project_id..."
  vercel env pull "$app_dir/.env.local" --yes --cwd "$app_dir"

  echo "🧹 Cleaning up redundant environment variables..."
  if grep -q '^AUTH_REDIRECT_PROXY_URL' "$app_dir/.env.local"; then
    # Remove all lines containing AUTH_REDIRECT_PROXY_URL
    sed -i '' '/^AUTH_REDIRECT_PROXY_URL/d' "$app_dir/.env.local" 2>/dev/null || sed -i '/^AUTH_REDIRECT_PROXY_URL/d' "$app_dir/.env.local"
    echo "   ➤ Removed AUTH_REDIRECT_PROXY_URL from $vercel_project_id .env.local"
  fi

  echo "✅ Pulled and sanitized .env.local for $vercel_project_id → $app_dir/.env.local"
  echo
}

# Pull for Admin
pull_env "$ADMIN_DIR" "ramsoc-admin-portal"

# Pull for Client
pull_env "$CLIENT_DIR" "ramsoc-app"

cd "$ROOT_DIR"
echo "🎉 All environment variables pulled and cleaned successfully!"
echo "---------------------------------------------------------------"
echo "• Admin .env.local → apps/admin/.env.local"
echo "• Client .env.local → apps/client/.env.local"
