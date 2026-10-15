# Victor Gabriel - Site Profissional

Site profissional para Victor Gabriel, Consultor de Negócios especializado em soluções de consórcio para imóveis e veículos.

## Tecnologias

- React.js 18.3.1
- Vite 5.4.10
- React Router DOM 6.26.2
- Tailwind CSS 3.4.14
- Lucide React 0.454.0
- React Helmet Async 2.0.5
- ESLint 9.13.0

## Estrutura das Pastas

```
site/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── FAQItem.jsx
│   │   │   └── ServiceCard.jsx
│   │   ├── common/
│   │   │   ├── Breadcrumbs.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   ├── SEO.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── MainLayout.jsx
│   │   └── navigation/
│   │       ├── MobileMenu.jsx
│   │       └── Navbar.jsx
│   ├── pages/
│   │   ├── ComoFunciona.jsx
│   │   ├── ConsorcioImobiliario.jsx
│   │   ├── ConsorcioVeiculos.jsx
│   │   ├── Contato.jsx
│   │   ├── Home.jsx
│   │   ├── NaoEncontrada.jsx
│   │   ├── PerguntasFrequentes.jsx
│   │   ├── PoliticaPrivacidade.jsx
│   │   └── Sobre.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── services/
│   │   └── whatsapp.js
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   ├── constants.js
│   │   ├── seo.js
│   │   └── validation.js
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Requisitos

- Node.js 18.x ou superior
- npm 9.x ou superior

## Instalação

1. Clone o repositório ou navegue até a pasta do projeto
2. Instale as dependências:

```powershell
npm install
```

## Execução Local

Para executar o projeto em modo de desenvolvimento:

```powershell
npm run dev
```

O site estará disponível em `http://localhost:5173`

## Configuração de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```powershell
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```
VITE_SITE_URL=https://isekaiblox.com.br
VITE_WHATSAPP_NUMBER=5541920048287
VITE_INSTAGRAM_URL=https://instagram.com/seu-usuario
```

**Importante:** Variáveis que começam com `VITE_` são públicas e nunca devem conter segredos, senhas ou tokens privados.

## Build

Para criar uma versão de produção:

```powershell
npm run build
```

Os arquivos de produção serão gerados na pasta `dist`.

## Testes

Para executar o lint:

```powershell
npm run lint
```

## Deploy na Vercel

### 1. Criar um repositório GitHub

1. Crie um novo repositório no GitHub
2. Inicialize o git no projeto:

```powershell
git init
git add .
git commit -m "Initial commit"
```

3. Adicione o repositório remoto:

```powershell
git remote add origin https://github.com/seu-usuario/victor-gabriel-site.git
```

4. Envie os arquivos:

```powershell
git branch -M main
git push -u origin main
```

### 2. Importar na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Importe o repositório criado
5. Configure as variáveis de ambiente:
   - `VITE_SITE_URL`: https://isekaiblox.com.br
   - `VITE_WHATSAPP_NUMBER`: 5541920048287
   - `VITE_INSTAGRAM_URL`: (opcional)
6. Clique em "Deploy"

### 3. Configurar Domínio Personalizado

1. Após o deploy, acesse as configurações do projeto na Vercel
2. Vá em "Domains"
3. Adicione o domínio: `isekaiblox.com.br`
4. Configure os registros DNS conforme as instruções da Vercel:
   - **Tipo A**: Aponte para os IPs fornecidos pela Vercel
   - **Tipo CNAME**: Aponte `www` para `cname.vercel-dns.com`

### 4. Testar

1. Aguarde a propagação dos DNS (pode levar de alguns minutos a 48 horas)
2. Teste o acesso via HTTPS
3. Teste todas as rotas:
   - /
   - /sobre
   - /consorcio-imobiliario
   - /consorcio-veiculos
   - /como-funciona
   - /perguntas-frequentes
   - /contato
   - /politica-de-privacidade
4. Teste o formulário em celular e desktop
5. Verifique a integração com WhatsApp

## Personalização

### Trocar Imagens

As imagens atuais são placeholders SVG. Para substituir:

1. Adicione suas imagens na pasta `src/assets/images/`
2. Atualize os componentes que utilizam as imagens
3. Para imagens públicas, adicione na pasta `public/`

### Atualizar Textos

Os textos principais estão nos arquivos de página em `src/pages/`. Edite conforme necessário.

### Atualizar Telefone

O telefone é configurado via variável de ambiente `VITE_WHATSAPP_NUMBER`. Altere no arquivo `.env`.

### Atualizar Instagram

Configure a URL do Instagram via variável de ambiente `VITE_INSTAGRAM_URL` no arquivo `.env`.

## Solução de Problemas

### O site não carrega após build

Verifique se todas as dependências estão instaladas:

```powershell
npm install
npm run build
```

### Erro ao abrir WhatsApp

Verifique se o número está configurado corretamente no `.env` e se o formato é apenas números (sem espaços, traços ou parênteses).

### Rotas não funcionam no deploy

O arquivo `vercel.json` já está configurado para rewrites. Se o problema persistir, verifique as configurações de deploy na Vercel.

### Erros de lint

```powershell
npm run lint
```

Corrija os erros reportados antes de fazer o deploy.

## Funcionalidades Implementadas

- Navegação por React Router com 8 rotas
- Cabeçalho responsivo com menu mobile
- Rodapé com links e informações
- Formulário de captação com validação
- Integração com WhatsApp Business
- Página inicial com hero, apresentação, soluções e CTA
- Página Sobre
- Página de Consórcio Imobiliário
- Página de Consórcio de Veículos
- Página Como Funciona
- Página de Perguntas Frequentes com accordion
- Página de Contato
- Política de Privacidade
- Página 404
- SEO com meta tags e Open Graph
- Botão flutuante de WhatsApp
- Breadcrumbs nas páginas internas
- Design responsivo
- Acessibilidade (teclado, leitor de tela, contraste)
- Configuração para Vercel

## Notas Importantes

- O formulário não armazena dados pessoais (sem localStorage, sessionStorage, cookies, banco de dados)
- Os dados são utilizados apenas para montar a mensagem do WhatsApp
- O visitante precisa confirmar o envio da mensagem no WhatsApp
- Não foram inventadas informações profissionais, depoimentos ou resultados
- O design utiliza a paleta de cores especificada (azul-marinho, dourado, branco, cinza)
- O site está preparado para produção e deploy na Vercel

## Etapas que Dependem de Informações do Usuário

1. Configurar a URL do Instagram (se houver)
2. Configurar o domínio `isekaiblox.com.br` na Vercel
3. Configurar os registros DNS do domínio
4. Adicionar imagens reais (arquitetura, veículos, foto de perfil)
5. Verificar e autorizar o uso da marca Ademicon (se aplicável)
6. Atualizar informações profissionais conforme realidade
7. Configurar um e-mail de contato para a política de privacidade

## Licença

Este projeto é propriedade de Victor Gabriel.
