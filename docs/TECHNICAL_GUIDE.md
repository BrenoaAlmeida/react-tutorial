# Guia Técnico - React Tutorial

## 🏗️ Arquitetura dos Projetos

### 1. Primeiro App - Arquitetura

```
primeiro-app/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header/         # Componente de navegação
│   │   ├── Test.js         # Demonstração de localStorage
│   │   ├── TestApi.js      # Integração com API externa
│   │   └── Nome.js         # Componente de exemplo
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home/           # Página inicial
│   │   ├── Sobre/          # Página sobre
│   │   ├── Contato/        # Página de contato
│   │   ├── Produto/        # Página dinâmica
│   │   └── Erro/           # Página de erro 404
│   ├── App.js              # Componente raiz
│   ├── routes.js           # Configuração de rotas
│   ├── index.js            # Ponto de entrada
│   └── style.css           # Estilos globais
└── public/                 # Assets estáticos
```

**Padrões Utilizados:**
- Componentes funcionais com hooks
- Roteamento centralizado em `routes.js`
- CSS global com classes específicas
- Estrutura de pastas por funcionalidade

### 2. Prime - Arquitetura

```
prime/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   └── Header/         # Header da aplicação
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home/           # Lista de filmes
│   │   ├── Filme/          # Detalhes do filme
│   │   ├── Favoritos/      # Filmes favoritos
│   │   └── Erro/           # Página de erro
│   ├── services/           # Serviços e APIs
│   │   └── api.js          # Configuração do Axios
│   ├── App.js              # Componente raiz
│   ├── routes.js           # Configuração de rotas
│   └── index.css           # Estilos globais
```

**Padrões Utilizados:**
- Separação de serviços em pasta dedicada
- Configuração centralizada do Axios
- Estados de loading e erro
- Integração com API externa

### 3. Next.js - Arquitetura

```
next-js/
├── src/
│   └── app/                # App Router (Next.js 13+)
│       ├── components/     # Componentes reutilizáveis
│       ├── repositorios/   # Páginas de repositórios
│       ├── (site)/         # Grupo de rotas
│       ├── page.tsx        # Página principal
│       ├── layout.tsx      # Layout global
│       ├── loading.tsx     # Componente de loading
│       └── globals.css     # Estilos globais
├── public/                 # Assets estáticos
└── next.config.ts          # Configuração do Next.js
```

**Padrões Utilizados:**
- App Router do Next.js 13+
- Server Components por padrão
- TypeScript para type safety
- CSS Modules para estilização
- Data fetching no servidor

### 4. Node.js - Arquitetura

```
nodejs/
└── modulo01/
    ├── index.js            # Servidor Express
    ├── package.json        # Dependências
    └── node_modules/       # Dependências instaladas
```

**Padrões Utilizados:**
- Express.js como framework
- Middleware global
- Rotas RESTful
- Operações CRUD básicas

## 🔧 Configurações Específicas

### React Scripts (primeiro-app e prime)

**package.json scripts:**
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

**Configurações do ESLint:**
```json
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }
}
```

### Next.js

**next.config.ts:**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
```

**TypeScript (tsconfig.json):**
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Node.js

**package.json scripts:**
```json
{
  "scripts": {
    "dev": "nodemon index.js"
  }
}
```

## 📊 Dependências Detalhadas

### Primeiro App
```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
```

### Prime
```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0",
    "react-scripts": "5.0.1",
    "react-toastify": "^10.0.6",
    "web-vitals": "^2.1.4"
  }
}
```

### Next.js
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.1.1"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19"
  }
}
```

### Node.js
```json
{
  "dependencies": {
    "express": "^4.21.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}
```

## 🎨 Sistema de Estilos

### CSS Global (primeiro-app)
```css
/* Reset global */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Header */
header {
    background-color: #121212;
    color: #fff;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
}

/* Botões */
.botao {
    color: #ff9800;
    border: 2px solid #ff9800;
    border-radius: 5px;
    transition: all 0.5s;
}

.botao:hover {
    background-color: #ff9800;
    color: #fff;
}
```

### CSS Modules (Next.js)
```css
/* globals.css */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}
```

## 🔌 Integrações de API

### TMDB API (prime)
```javascript
// services/api.js
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

// Uso nos componentes
const response = await api.get("movie/now_playing", {
    params: {
        api_key: 'ebb810af310a21bd4f16bd2544db3713',
        language: 'pt-Br',
        page: 1
    }
})
```

### GitHub API (Next.js)
```typescript
// Data fetching no servidor
async function getData() {
  const data = await delayedFetch("https://api.github.com/users/BrenoaAlmeida/repos", 1500)
  return data;
}

async function delayedFetch(url: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url, {next: {revalidate: 120}});
  return response.json();
}
```

## 🚀 Performance e Otimização

### React Apps
- **Code Splitting:** Automático com React Router
- **Bundle Optimization:** React Scripts otimiza automaticamente
- **Lazy Loading:** Implementado nas rotas

### Next.js
- **Server-Side Rendering:** Melhora SEO e performance inicial
- **Static Generation:** Páginas estáticas quando possível
- **Image Optimization:** Componente Image do Next.js
- **Bundle Analysis:** `npm run build` mostra análise do bundle

### Node.js
- **Middleware:** Processamento otimizado de requisições
- **JSON Parsing:** Configurado para performance

## 🧪 Testes

### React Apps
```bash
npm test
```
- Jest como test runner
- React Testing Library para testes de componentes
- Cobertura automática de testes

### Next.js
```bash
npm run lint
```
- ESLint configurado
- TypeScript para type checking

## 🔒 Segurança

### APIs
- **TMDB:** API key em código (não recomendado para produção)
- **GitHub:** Endpoints públicos, sem autenticação necessária

### Recomendações para Produção
1. Mover API keys para variáveis de ambiente
2. Implementar rate limiting no backend
3. Adicionar validação de entrada
4. Configurar CORS adequadamente

## 📱 Responsividade

### Breakpoints Utilizados
```css
/* Mobile First */
@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}
```

### Flexbox Layouts
```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

## 🔄 Versionamento

### Git Workflow
1. **main:** Branch principal
2. **feature branches:** Para novas funcionalidades
3. **hotfix branches:** Para correções urgentes

### Commits
- Usar mensagens descritivas
- Seguir convenção: `feat:`, `fix:`, `docs:`, etc.

## 📈 Monitoramento

### Web Vitals
- Implementado nos projetos React
- Métricas de performance automáticas

### Logs
- Console logs para desenvolvimento
- Estrutura para implementar logging em produção

---

**Este guia técnico deve ser atualizado conforme o projeto evolui.** 