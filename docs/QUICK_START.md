# 🚀 Guia de Início Rápido

## ⚡ Setup Rápido (5 minutos)

### 1. Pré-requisitos
```bash
# Verifique se você tem Node.js instalado
node --version  # Deve ser 16 ou superior
npm --version   # Qualquer versão recente
```

### 2. Clone e Instale
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd react-tutorial

# Instale todas as dependências de uma vez
./install-all.sh  # Se o script existir
# OU instale manualmente:
```

### 3. Instalação Manual (se necessário)
```bash
# Primeiro App
cd primeiro-app && npm install && cd ..

# Prime (Filmes)
cd prime && npm install && cd ..

# Next.js
cd next-js && npm install && cd ..

# Node.js Backend
cd nodejs/modulo01 && npm install && cd ../..
```

## 🎯 Executando os Projetos

### Opção 1: Executar Individualmente

**Primeiro App (React Básico):**
```bash
cd primeiro-app
npm start
# Acesse: http://localhost:3000
```

**Prime (Filmes):**
```bash
cd prime
npm start
# Acesse: http://localhost:3000
# ⚠️ Certifique-se de que a porta 3000 está livre
```

**Next.js:**
```bash
cd next-js
npm run dev
# Acesse: http://localhost:3000
```

**Node.js Backend:**
```bash
cd nodejs/modulo01
npm run dev
# API disponível em: http://localhost:3000
```

### Opção 2: Executar Múltiplos Projetos

**Terminal 1 - Primeiro App:**
```bash
cd primeiro-app && npm start
```

**Terminal 2 - Prime:**
```bash
cd prime && npm start
# ⚠️ Pode dar conflito de porta, mude para 3001
```

**Terminal 3 - Next.js:**
```bash
cd next-js && npm run dev
# ⚠️ Pode dar conflito de porta, mude para 3002
```

**Terminal 4 - Node.js:**
```bash
cd nodejs/modulo01 && npm run dev
```

## 🔧 Solução de Problemas Comuns

### Erro de Porta em Uso
```bash
# Verifique quais processos estão usando a porta 3000
lsof -i :3000

# Mate o processo se necessário
kill -9 [PID]

# OU use uma porta diferente
PORT=3001 npm start
```

### Erro de Dependências
```bash
# Limpe o cache do npm
npm cache clean --force

# Delete node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro de Versão do Node.js
```bash
# Use nvm para gerenciar versões
nvm install 18
nvm use 18
```

## 📱 Testando as Aplicações

### Primeiro App
1. Acesse http://localhost:3000
2. Teste a navegação entre páginas
3. Vá para `/testApi` para ver a integração com API
4. Teste o componente com localStorage em `/test`

### Prime (Filmes)
1. Acesse http://localhost:3000
2. Veja a lista de filmes em cartaz
3. Clique em "Acessar" para ver detalhes
4. Teste a funcionalidade de favoritos

### Next.js
1. Acesse http://localhost:3000
2. Veja a lista de repositórios do GitHub
3. Observe o loading state
4. Teste a responsividade

### Node.js Backend
1. Teste os endpoints:
```bash
# Listar cursos
curl http://localhost:3000/cursos

# Adicionar curso
curl -X POST http://localhost:3000/cursos \
  -H "Content-Type: application/json" \
  -d '{"name": "React"}'

# Buscar curso por índice
curl http://localhost:3000/cursos/0
```

## 🎨 Personalização Rápida

### Mudar Cores
```css
/* Em style.css */
.botao {
    color: #YOUR_COLOR;  /* Mude aqui */
    border: 2px solid #YOUR_COLOR;
}
```

### Mudar API
```javascript
// Em services/api.js
const api = axios.create({
    baseURL: 'YOUR_API_URL'
})
```

### Mudar Porta
```bash
# Para React
PORT=3001 npm start

# Para Next.js
npm run dev -- -p 3001
```

## 📚 Próximos Passos

1. **Leia a documentação completa:** `docs/README.md`
2. **Consulte o guia técnico:** `docs/TECHNICAL_GUIDE.md`
3. **Explore o código:** Cada projeto tem comentários explicativos
4. **Teste as funcionalidades:** Use as aplicações para entender o fluxo
5. **Faça modificações:** Experimente mudar cores, textos, funcionalidades

## 🆘 Precisa de Ajuda?

1. **Erro de instalação:** Verifique a versão do Node.js
2. **Erro de porta:** Use portas diferentes ou mate processos
3. **Erro de API:** Verifique se as APIs estão funcionando
4. **Dúvidas gerais:** Consulte a documentação completa

## 🎯 Checklist de Setup

- [ ] Node.js instalado (versão 16+)
- [ ] Repositório clonado
- [ ] Dependências instaladas
- [ ] Primeiro App rodando
- [ ] Prime rodando
- [ ] Next.js rodando
- [ ] Node.js backend rodando
- [ ] Todas as funcionalidades testadas

---

**🎉 Parabéns! Você está pronto para começar a trabalhar com o projeto!** 