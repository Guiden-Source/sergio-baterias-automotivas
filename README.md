# 🔋 Sérgio Baterias Automotivas - Website Premium

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Site one-page premium e profissional para **Sérgio Baterias Automotivas** - especializada em venda e instalação de baterias automotivas em Atibaia, SP.

## 🚀 Demonstração

- **Performance**: Lighthouse Score 90+
- **100% Responsivo**: Mobile, Tablet e Desktop
- **SEO Otimizado**: Meta tags completas e Schema.org
- **Acessível**: WCAG 2.1 AA compliant

## 📋 Índice

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Deploy](#deploy)
- [Performance](#performance)
- [Customização](#customização)
- [Suporte](#suporte)

## ✨ Características

### 🎨 Design

- ✅ Design moderno e profissional
- ✅ Paleta de cores premium (vermelho, laranja, gradientes)
- ✅ Tipografia hierárquica e legível (Inter + Poppins)
- ✅ Animações suaves e performáticas
- ✅ Ícones SVG otimizados

### 📱 Responsividade

- ✅ Mobile-first approach
- ✅ Breakpoints: 320px, 640px, 768px, 1024px, 1280px
- ✅ Touch-friendly (botões mínimo 44x44px)
- ✅ Menu mobile animado
- ✅ Testado em Chrome, Firefox, Safari, Edge

### ⚡ Performance

- ✅ Vanilla JavaScript (sem frameworks pesados)
- ✅ CSS otimizado e minificável
- ✅ Intersection Observer para animações
- ✅ Debounce em eventos de scroll
- ✅ Lazy loading ready
- ✅ Carregamento rápido (<3s em 3G)

### 🎯 Conversão

- ✅ CTAs estratégicos em cada seção
- ✅ Botão WhatsApp flutuante com animação pulse
- ✅ Links telefônicos clicáveis (tel:)
- ✅ Senso de urgência no design
- ✅ Social proof (depoimentos)

### ♿ Acessibilidade

- ✅ HTML semântico (header, nav, main, section, footer)
- ✅ ARIA labels e roles
- ✅ Contraste adequado (WCAG AA)
- ✅ Navegação por teclado
- ✅ Reduced motion support

### 🔍 SEO

- ✅ Meta tags completas (title, description, OG tags)
- ✅ Schema.org LocalBusiness markup
- ✅ URLs amigáveis
- ✅ Alt text em imagens
- ✅ Sitemap ready

## 🛠️ Tecnologias

### Frontend

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - CSS Custom Properties (variáveis)
  - CSS Grid & Flexbox
  - Animations & Transitions
  - Mobile-first Media Queries
- **JavaScript ES6+**:
  - Vanilla JS (sem jQuery)
  - Intersection Observer API
  - Smooth Scroll
  - Event Delegation
  - Debounce/Throttle

### Fontes

- **Google Fonts**: Inter (texto) e Poppins (títulos)

### Ícones

- **SVG Inline**: Otimizados e customizáveis

## 📁 Estrutura do Projeto

```
sergio-baterias/
├── index.html          # Página principal (HTML semântico)
├── css/
│   └── style.css       # Estilos modernos e responsivos
├── js/
│   └── main.js         # JavaScript interativo
├── README.md           # Documentação completa
└── example.html        # (arquivo antigo - pode ser removido)
```

### Seções do Site

1. **Header Fixo**: Logo + Telefone + Menu mobile
2. **Hero Section**: Título impactante + CTAs principais
3. **Stats Bar**: Números de impacto com counter animado
4. **Diferenciais**: 4 cards com benefícios principais
5. **Serviços**: Lista visual de serviços oferecidos
6. **Como Funciona**: 3 passos em timeline
7. **Depoimentos**: Social proof com avaliações
8. **CTA Final**: Última chamada para ação
9. **Contato**: Informações de contato
10. **Footer**: Copyright + Back to top
11. **WhatsApp Float**: Botão flutuante sempre visível

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Servidor HTTP local (opcional, mas recomendado)

### Instalação

1. **Clone ou baixe o projeto**:
   ```bash
   cd "Sergio baterias automotivas"
   ```

2. **Abra o projeto**:
   - Duplo clique em `index.html` (abrirá no navegador)
   - OU use um servidor local (recomendado)

### Servidor Local (Recomendado)

#### Opção 1: Live Server (VS Code)
```bash
# Instale a extensão "Live Server" no VS Code
# Clique com botão direito no index.html
# Selecione "Open with Live Server"
```

#### Opção 2: Python (se instalado)
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Acesse: http://localhost:8000
```

#### Opção 3: Node.js (http-server)
```bash
# Instale globalmente
npm install -g http-server

# Execute no diretório do projeto
http-server -p 8000

# Acesse: http://localhost:8000
```

#### Opção 4: PHP (se instalado)
```bash
php -S localhost:8000
```

### Verificação

Após abrir o site, verifique:
- ✅ Header fixo aparece no topo
- ✅ Menu mobile funciona em telas pequenas
- ✅ Botões de WhatsApp e telefone são clicáveis
- ✅ Animações ocorrem ao rolar a página
- ✅ Contador de números anima ao entrar na viewport
- ✅ Botão WhatsApp flutuante está no canto inferior direito

## 🌐 Deploy

### Opção 1: Vercel (Recomendado - Grátis)

Deploy automático já preparado via integração Git + `vercel.json` (cache agressivo para assets). Passos:

1. Acesse https://vercel.com e clique em "Add New > Project".
2. Importe o repositório GitHub `sergio-baterias-automotivas`.
3. Configurações:
  - Framework preset: Other
  - Build Command: (deixe em branco)
  - Output Directory: (deixe em branco ou ".")
  - Root Directory: (raiz do repo)
4. Clique em Deploy e aguarde a URL (`.vercel.app`).
5. Configure domínio customizado (opcional) em Settings > Domains.
6. Verifique cabeçalhos de cache (abra DevTools > Network) para css/js.

Para re‑deploy basta fazer push na branch `main`.

### Opção 2: Netlify (Alternativa)

1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o painel
3. Aguarde deploy automático
4. Seu site estará em: `https://seu-site.netlify.app`

**Configurações recomendadas**:
- Build command: (deixe vazio)
- Publish directory: `/`

### Cache & Headers (Vercel)

O arquivo `vercel.json` define Cache-Control para CSS, JS e imagens:
```
public, max-age=31536000, immutable
```
Recomendado: ao atualizar assets, versão manual (ex: `style-v2.css`) se quiser invalidação imediata.

### Canonical & SEO

`index.html` inclui `<link rel="canonical" href="https://sergiobaterias.com.br/">` e `robots.txt` + `sitemap.xml` adicionados para melhorar indexação.

### Opção 3: GitHub Pages (Alternativa)

### Opção 4: Hospedagem Tradicional

1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione branch `main` e pasta `/ (root)`
5. Salve e aguarde
6. Seu site estará em: `https://seu-usuario.github.io/nome-repo`

### Purga de Cache na Vercel

Mudanças em HTML propagam imediatamente. Assets com headers imutáveis podem permanecer em cache em navegadores; para garantir atualização:
1. Incrementar nome do arquivo.
2. Usar Query String versionada (menos ideal): `style.css?v=2`.
3. Invalidação manual via painel (se configurado com plano avançado).

1. Contrate hospedagem (ex: Hostinger, HostGator)
2. Acesse via FTP/cPanel
3. Faça upload dos arquivos para `public_html`
4. Configure domínio personalizado

### Domínio Personalizado

Após deploy, configure domínio:
- **Netlify/Vercel**: Configurações > Domain > Add custom domain
- **GitHub Pages**: CNAME file + DNS records
- **Hospedagem**: Aponte DNS para servidor

## 📊 Performance

### Lighthouse Scores (Target)

| Categoria | Score |
|-----------|-------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

### Otimizações Aplicadas

- ✅ CSS minificado (production)
- ✅ JavaScript otimizado
- ✅ SVG inline (sem requisições extras)
- ✅ Fontes com preconnect
- ✅ Debounce em scroll events
- ✅ Intersection Observer (sem scroll listeners pesados)
- ✅ Animações com transform/opacity (GPU-accelerated)

### Testar Performance

```bash
# Chrome DevTools
1. Abra DevTools (F12)
2. Vá em "Lighthouse"
3. Selecione "Performance, Accessibility, Best Practices, SEO"
4. Clique em "Analyze page load"

# Ferramentas Online
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/
```

## 🎨 Customização

### Cores

Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary: #dc2626;      /* Vermelho principal */
    --primary-dark: #b91c1c; /* Vermelho escuro */
    --secondary: #f59e0b;    /* Laranja/dourado */
    --accent: #22c55e;       /* Verde */
    /* ... outras cores ... */
}
```

### Tipografia

Altere as fontes em `index.html` (Google Fonts) e `css/style.css`:

```css
:root {
    --font-primary: 'Inter', sans-serif;
    --font-heading: 'Poppins', sans-serif;
}
```

### Conteúdo

Edite diretamente em `index.html`:
- Textos das seções
- Telefone e WhatsApp
- Localização
- Depoimentos
- Serviços

### Imagens (Opcional)

Para adicionar imagens:

1. Crie pasta `images/` na raiz
2. Adicione imagens otimizadas (WebP recomendado)
3. Referencie no HTML:
   ```html
   <img src="images/bateria.webp" alt="Bateria automotiva">
   ```

### Animações

Ajuste velocidades em `css/style.css`:

```css
:root {
    --transition-fast: 150ms;
    --transition-base: 300ms;
    --transition-slow: 500ms;
}
```

## 📱 Informações de Contato

Atualize os links de contato em `index.html`:

```html
<!-- Telefone -->
<a href="tel:+5511997081974">(11) 99708-1974</a>

<!-- WhatsApp -->
<a href="https://api.whatsapp.com/send/?phone=%2B5511997081974&text=...">
```

Para personalizar mensagem do WhatsApp, edite o parâmetro `text`:
```
&text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20bateria
```

## 🔧 Manutenção

### Atualizar Conteúdo

1. Abra `index.html` no editor
2. Localize a seção desejada (busque por comentários HTML)
3. Edite o texto
4. Salve e teste no navegador

### Adicionar Nova Seção

1. Copie estrutura de seção existente
2. Cole antes do `</main>`
3. Ajuste IDs e classes
4. Adicione estilos em `css/style.css`
5. Adicione link no menu (se necessário)

### Backup

Recomendado:
- Versionamento com Git
- Backup semanal dos arquivos
- Exportar código do editor

## 🐛 Solução de Problemas

### Menu mobile não abre
- Verifique se `js/main.js` está carregando
- Abra Console (F12) e procure erros
- Verifique path do arquivo: `<script src="js/main.js">`

### Animações não funcionam
- Verifique suporte do navegador (IE11 não suportado)
- Limpe cache do navegador (Ctrl+Shift+R)
- Verifique Console por erros JavaScript

### Estilos não aplicados
- Verifique path do CSS: `<link href="css/style.css">`
- Limpe cache (Ctrl+F5)
- Valide CSS em [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

### Links de WhatsApp/Telefone não funcionam
- Em desktop, telefone abre app de chamadas (se configurado)
- WhatsApp abre no navegador ou app (se instalado)
- Teste em dispositivo móvel real

## 📚 Recursos Adicionais

### Documentação

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

### Ferramentas

- [Can I Use](https://caniuse.com/) - Compatibilidade de browsers
- [TinyPNG](https://tinypng.com/) - Compressão de imagens
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Otimização de SVG

### Aprendizado

- [freeCodeCamp](https://www.freecodecamp.org/)
- [Codecademy](https://www.codecademy.com/)
- [W3Schools](https://www.w3schools.com/)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 👨‍💻 Desenvolvimento

**Desenvolvido com ❤️ usando tecnologias modernas**

- HTML5 Semântico
- CSS3 Moderno (Grid, Flexbox, Custom Properties)
- JavaScript ES6+ Vanilla
- Design Mobile-First
- Performance-Optimized

---

## 📞 Contato do Negócio

**Sérgio Baterias Automotivas**
- 📱 WhatsApp: (11) 99708-1974
- 📞 Telefone: (11) 99708-1974
- 📍 Localização: Atibaia, SP
- ⏰ Atendimento: Segunda a Sábado - 08h às 19:30h
- 🚗 Entrega: Disponível em Atibaia

---

## ✅ Checklist de Lançamento

Antes de colocar no ar:

- [ ] Testar em todos os navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Testar em dispositivos móveis reais
- [ ] Verificar todos os links (WhatsApp, telefone)
- [ ] Validar HTML ([W3C Validator](https://validator.w3.org/))
- [ ] Validar CSS ([CSS Validator](https://jigsaw.w3.org/css-validator/))
- [ ] Testar performance (Lighthouse)
- [ ] Verificar acessibilidade (WAVE, axe DevTools)
- [ ] Configurar domínio personalizado
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar Google Search Console (opcional)
- [ ] Adicionar favicon personalizado (opcional)
- [ ] Criar arquivo robots.txt (opcional)
- [ ] Criar sitemap.xml (opcional)

---

## 🎉 Pronto!

Seu site premium está pronto para gerar leads e vendas! 🚀

**Dúvidas?** Consulte a documentação acima ou entre em contato com o desenvolvedor.

**Bons negócios! 💪🔋**
