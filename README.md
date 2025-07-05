# React Tutorial - Documentação Completa do Projeto

## 📋 Visão Geral

Este repositório contém múltiplos projetos desenvolvidos durante o curso **"Vamos desenvolver passo a passo projetos completo Full Stack com NodeJs, ReactJS e React Native"**. O projeto é uma coleção de aplicações que demonstram diferentes tecnologias e conceitos do ecossistema React.

## 🏗️ Estrutura do Projeto

```
react-tutorial/
├── docs/                    # Documentação do projeto
├── primeiro-app/           # Aplicação React básica com roteamento
├── prime/                  # Aplicação React com integração de API (TMDB)
├── next-js/               # Aplicação Next.js com TypeScript
├── nodejs/                # Backend Node.js com Express
└── README.md              # README principal
```

## 🚀 Projetos Incluídos

### 1. Primeiro App (`primeiro-app/`)

**Descrição:** Aplicação React básica que demonstra conceitos fundamentais como roteamento, componentes, estado e localStorage.

**Tecnologias:**
- React 18.3.1
- React Router DOM 6.27.0
- React Scripts 5.0.1
- CSS puro para estilização

**Funcionalidades:**
- ✅ Navegação entre páginas (Home, Sobre, Contato)
- ✅ Sistema de rotas com React Router
- ✅ Componente Header reutilizável
- ✅ Página de erro 404
- ✅ Rotas dinâmicas (`/produto/:id`)
- ✅ Componente de teste com localStorage
- ✅ Integração com API externa (TestApi)
- ✅ Design responsivo com CSS

**Estrutura de Arquivos:**
```
primeiro-app/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Test.js          # Componente com localStorage
│   │   ├── TestApi.js       # Integração com API
│   │   └── Nome.js
│   ├── pages/
│   │   ├── Home/
│   │   ├── Sobre/
│   │   ├── Contato/
│   │   ├── Produto/         # Rota dinâmica
│   │   └── Erro/
│   ├── App.js
│   ├── routes.js
│   ├── index.js
│   └── style.css
└── public/
```

**Como Executar:**
```bash
cd primeiro-app
npm install
npm start
```

**Porta:** http://localhost:3000

---

### 2. Prime (`prime/`)

**Descrição:** Aplicação React que consome a API do The Movie Database (TMDB) para exibir filmes em cartaz.

**Tecnologias:**
- React 18.3.1
- React Router DOM 6.27.0
- Axios 1.7.7
- React Toastify 10.0.6
- CSS puro para estilização

**Funcionalidades:**
- ✅ Listagem de filmes em cartaz
- ✅ Integração com API TMDB
- ✅ Páginas de detalhes dos filmes
- ✅ Sistema de favoritos
- ✅ Loading states
- ✅ Tratamento de erros
- ✅ Design responsivo

**Estrutura de Arquivos:**
```
prime/
├── src/
│   ├── components/
│   │   └── Header/
│   ├── pages/
│   │   ├── Home/           # Lista de filmes
│   │   ├── Filme/          # Detalhes do filme
│   │   ├── Favoritos/      # Filmes favoritos
│   │   └── Erro/
│   ├── services/
│   │   └── api.js          # Configuração Axios
│   ├── App.js
│   ├── routes.js
│   └── index.css
```

**API Utilizada:**
- **Base URL:** https://api.themoviedb.org/3/
- **Endpoint:** movie/now_playing
- **API Key:** ebb810af310a21bd4f16bd2544db3713

**Como Executar:**
```bash
cd prime
npm install
npm start
```

**Porta:** http://localhost:3000

---

### 3. Next.js (`next-js/`)

**Descrição:** Aplicação Next.js com TypeScript que consome a API do GitHub para exibir repositórios.

**Tecnologias:**
- Next.js 15.1.1
- React 19.0.0
- TypeScript 5
- CSS Modules

**Funcionalidades:**
- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Integração com API do GitHub
- ✅ Componentes TypeScript
- ✅ Roteamento baseado em arquivos
- ✅ Cache e revalidação
- ✅ Loading states

**Estrutura de Arquivos:**
```
next-js/
├── src/
│   └── app/
│       ├── components/
│       ├── repositorios/
│       ├── (site)/
│       ├── page.tsx        # Página principal
│       ├── layout.tsx      # Layout global
│       ├── loading.tsx     # Loading component
│       └── globals.css
├── public/
└── next.config.ts
```

**API Utilizada:**
- **Endpoint:** https://api.github.com/users/BrenoaAlmeida/repos
- **Cache:** Revalidação a cada 120 segundos

**Como Executar:**
```bash
cd next-js
npm install
npm run dev
```

**Porta:** http://localhost:3000

---

### 4. Node.js (`nodejs/`)

**Descrição:** Backend simples com Express.js que demonstra operações CRUD básicas.

**Tecnologias:**
- Node.js
- Express.js 4.21.1
- Nodemon 3.1.7 (desenvolvimento)

**Funcionalidades:**
- ✅ API RESTful
- ✅ Operações CRUD (Create, Read, Update, Delete)
- ✅ Middleware global
- ✅ Query parameters
- ✅ Route parameters
- ✅ Request body parsing

**Endpoints:**
- `GET /cursos` - Lista todos os cursos
- `GET /cursos/:index` - Busca curso por índice
- `POST /cursos` - Adiciona novo curso
- `PUT /cursos/:index` - Atualiza curso por índice
- `DELETE /cursos/:index` - Remove curso por índice

**Como Executar:**
```bash
cd nodejs/modulo01
npm install
npm run dev
```

**Porta:** http://localhost:3000

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Git

### Instalação Global
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd react-tutorial

# Instale as dependências de cada projeto
cd primeiro-app && npm install
cd ../prime && npm install
cd ../next-js && npm install
cd ../nodejs/modulo01 && npm install
```

## 📚 Conceitos Demonstrados

### React (primeiro-app e prime)
- ✅ Componentes funcionais
- ✅ Hooks (useState, useEffect)
- ✅ React Router para navegação
- ✅ Props e comunicação entre componentes
- ✅ LocalStorage para persistência
- ✅ Integração com APIs externas
- ✅ Tratamento de estados de loading
- ✅ Estilização com CSS

### Next.js
- ✅ App Router (Next.js 13+)
- ✅ Server Components
- ✅ TypeScript
- ✅ Data Fetching
- ✅ Cache e revalidação
- ✅ Layouts e templates
- ✅ Loading states

### Node.js
- ✅ Express.js framework
- ✅ Middleware
- ✅ Rotas e parâmetros
- ✅ Operações CRUD
- ✅ JSON como formato de dados

## 🎨 Design e UX

### Cores Utilizadas
- **Primária:** Laranja (#ff9800) - Botões e elementos de destaque
- **Secundária:** Cinza escuro (#121212) - Header
- **Texto:** Branco (#fff) - Texto sobre fundo escuro
- **Fundo:** Branco (#fff) - Área de conteúdo

### Responsividade
- Todos os projetos são responsivos
- Flexbox para layouts
- Media queries quando necessário
- Design mobile-first

## 🔧 Scripts Disponíveis

### Primeiro App e Prime
```bash
npm start      # Inicia o servidor de desenvolvimento
npm run build  # Cria build de produção
npm test       # Executa testes
npm run eject  # Ejecta configurações (irreversível)
```

### Next.js
```bash
npm run dev    # Inicia servidor de desenvolvimento
npm run build  # Cria build de produção
npm start      # Inicia servidor de produção
npm run lint   # Executa linter
```

### Node.js
```bash
npm run dev    # Inicia servidor com nodemon
```

## 🚀 Deploy

### React Apps (primeiro-app e prime)
```bash
npm run build
# Deploy da pasta build/ para qualquer serviço de hosting estático
```

### Next.js
```bash
npm run build
npm start
# Ou deploy para Vercel/Netlify
```

### Node.js
```bash
# Deploy para serviços como Heroku, Railway, ou VPS
```

## 📝 Notas Importantes

1. **APIs Externas:**
   - TMDB API key está hardcoded no projeto `prime`
   - GitHub API não requer autenticação para endpoints públicos

2. **Portas:**
   - Todos os projetos React usam porta 3000 por padrão
   - Node.js backend usa porta 3000
   - Certifique-se de que as portas estão livres

3. **Dependências:**
   - Cada projeto tem suas próprias dependências
   - Sempre execute `npm install` em cada diretório

4. **Desenvolvimento:**
   - Use `npm run dev` para desenvolvimento
   - Hot reload está configurado em todos os projetos

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- **Desenvolvedor:** Breno Almeida
- **Curso:** Vamos desenvolver passo a passo projetos completo Full Stack com NodeJs, ReactJS e React Native

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação
2. Consulte os comentários no código
3. Abra uma issue no repositório

---

**Última atualização:** Dezembro 2024
**Versão:** 1.0.0 