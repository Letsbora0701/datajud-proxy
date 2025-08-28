#!/bin/bash
set -e

echo "🔄 Atualizando pacotes..."
sudo apt update -y
sudo apt upgrade -y

echo "📦 Instalando Node.js e npm..."
sudo apt install -y nodejs npm git

echo "📂 Clonando repositório..."
if [ ! -d "datajud-proxy" ]; then
  git clone https://github.com/Letsbora0701/datajud-proxy.git
fi

cd datajud-proxy

echo "📦 Instalando dependências..."
npm install

echo "🚀 Iniciando API..."
npm start
