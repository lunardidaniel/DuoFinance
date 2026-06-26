#!/usr/bin/env bash
# Duo Finance — one-command publish to GitHub.
# Usage: bash publish.sh https://github.com/SEU-USUARIO/duo-finance.git
set -e

REPO="$1"
if [ -z "$REPO" ]; then
  echo "Uso: bash publish.sh https://github.com/SEU-USUARIO/duo-finance.git"
  echo "(Crie primeiro um repositorio vazio em github.com -> New repository)"
  exit 1
fi

echo "==> Inicializando git..."
git init -q
git add .
git commit -q -m "Duo Finance: app inicial" || echo "(nada novo para commitar)"
git branch -M main

if git remote | grep -q origin; then
  git remote set-url origin "$REPO"
else
  git remote add origin "$REPO"
fi

echo "==> Enviando para o GitHub..."
git push -u origin main

echo ""
echo "✓ Enviado! Agora ative o GitHub Pages:"
echo "   Settings -> Pages -> Source: Deploy from a branch -> Branch: main / (root) -> Save"
echo "   Seu app ficara em: https://SEU-USUARIO.github.io/duo-finance/"
