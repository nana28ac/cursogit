const fs = require('fs');
const path = require('path');

console.log("Iniciando o processo de compilação (falso)...");

// 1. Simula a criação de uma pasta de build (dist/)
if (!fs.existsSync('dist')) fs.mkdirSync('dist');
fs.writeFileSync(path.join('dist', 'index.min.html'), '<!-- HTML minificado e ofuscado para produção --><script>console.log("Produção")</script>');
console.log("Pasta dist/ gerada (Arquivos otimizados para produção).");

// 2. Simula a geração de logs do sistema (logs/)
if (!fs.existsSync('logs')) fs.mkdirSync('logs');
fs.writeFileSync(path.join('logs', 'server-error.log'), '[ERROR] Falha ao carregar a porta 8080\n[WARN] Uso de CPU em 99%');
console.log("Pasta logs/ gerada (Lixo de execução de servidor).");

// 3. Simula um arquivo de variáveis de ambiente com senhas reais (.env)
fs.writeFileSync('.env', 'API_KEY=ghp_chave_secreta_do_github_12345\nDB_PASS=senha_super_secreta_do_banco');
console.log("Arquivo .env gerado (ATENÇÃO: Dados sensíveis e chaves de API).");

console.log("\n Artefatos de produção gerados com sucesso!");
