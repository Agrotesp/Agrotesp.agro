# AGROTESP - Site com Páginas Separadas

## 📋 O que foi feito

O site AGROTESP foi separado em **múltiplas páginas HTML independentes**, mantendo toda a funcionalidade, design e recursos originais.

## 📁 Estrutura dos Arquivos

```
├── index.html           → Página inicial (Home)
├── quem-somos.html      → Página "Quem Somos"
├── servicos.html        → Página "Nossos Serviços"
├── tecnologia.html      → Página "Tecnologia"
├── faq.html            → Página "Perguntas Frequentes"
├── contato.html        → Página de Contato (com formulário)
├── style.css           → Arquivo CSS (compartilhado)
├── script.js           → Arquivo JavaScript (atualizado)
├── AGROTESP.png        → Logo da empresa
└── README.md           → Este arquivo
```

## ✅ O que foi mantido

- ✅ Todo o design e aparência visual
- ✅ Todas as cores, fontes e estilos CSS
- ✅ Todas as imagens e logos
- ✅ Menu lateral de navegação
- ✅ Footer com links
- ✅ Formulário de contato com EmailJS
- ✅ Animações e efeitos visuais
- ✅ FAQ com acordeão funcional
- ✅ Responsividade mobile
- ✅ Máscaras de formulário

## 🔗 Como Compartilhar Páginas Específicas

Agora você pode compartilhar links diretos para cada seção:

- **Página Inicial**: `https://seusite.com/index.html`
- **Quem Somos**: `https://seusite.com/quem-somos.html`
- **Serviços**: `https://seusite.com/servicos.html`
- **Tecnologia**: `https://seusite.com/tecnologia.html`
- **FAQ**: `https://seusite.com/faq.html`
- **Contato**: `https://seusite.com/contato.html`

### Exemplos de Uso:

1. **Compartilhar só a página de FAQ**:
   - Copie o link: `https://seusite.com/faq.html`
   - Ao clicar, a pessoa vai direto para Perguntas Frequentes

2. **Compartilhar formulário de contato**:
   - Copie o link: `https://seusite.com/contato.html`
   - Perfeito para redes sociais e WhatsApp

3. **Compartilhar seus serviços**:
   - Copie o link: `https://seusite.com/servicos.html`

## 🚀 Como Usar

### Opção 1: Hospedar em Servidor Web

1. Faça upload de TODOS os arquivos para seu servidor
2. Mantenha todos na mesma pasta
3. Acesse através do domínio: `https://seudominio.com/index.html`

### Opção 2: Testar Localmente

1. Baixe todos os arquivos
2. Abra `index.html` diretamente no navegador
3. A navegação funcionará normalmente

### Opção 3: GitHub Pages (Gratuito)

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Ative GitHub Pages nas configurações
4. Seu site ficará em: `https://seuusuario.github.io/nome-do-repo`

## ⚙️ Configurações do Formulário

O formulário de contato está integrado com **EmailJS**. 

Para que funcione, verifique se as credenciais do EmailJS estão corretas em `contato.html`:

```javascript
emailjs.init("2jTeGSLsJ3gvQxhQ8");  // Seu User ID
await emailjs.sendForm('AGROTESP', 'template_fixgg33', form);
```

## 🎨 Personalizações

### Alterar Cores

Edite o arquivo `style.css` nas variáveis CSS no início:

```css
:root {
  --primary: #1e7d3c;    /* Verde principal */
  --secondary: #0d4d8c;  /* Azul secundário */
  --accent: #f59e0b;     /* Laranja destaque */
}
```

### Alterar Conteúdo

- Abra qualquer arquivo HTML
- Encontre o texto que deseja alterar
- Salve e atualize a página

### Adicionar Nova Página

1. Copie um dos arquivos HTML existentes
2. Renomeie (ex: `promocoes.html`)
3. Adicione o link no menu de navegação
4. Atualize o conteúdo

## 📱 Responsividade

O site funciona perfeitamente em:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1366px)
- ✅ Mobile (320px - 768px)

## 🔧 Suporte

Para dúvidas ou problemas:
- WhatsApp: (79) 99873-7632
- E-mail: contato@agrotesp.com

## 📝 Notas Importantes

1. **Todos os arquivos devem estar na mesma pasta** para o CSS e JavaScript funcionarem
2. **Não renomeie os arquivos CSS, JS ou de imagem** sem atualizar as referências nos HTML
3. **O formulário precisa de conexão com internet** para funcionar (EmailJS)
4. **Mantenha a estrutura de pastas** ao fazer upload para servidor

## ✨ Vantagens da Separação

✅ **Compartilhamento direto** de páginas específicas
✅ **SEO melhorado** - cada página pode ter título e meta tags únicos
✅ **Carregamento mais rápido** - apenas o necessário é carregado
✅ **Melhor indexação** no Google
✅ **Links específicos** para redes sociais
✅ **Navegação clara** no histórico do navegador

---

**© 2026 AGROTESP - Pulverização com Drones**
