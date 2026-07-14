# Site — Jamille Ovadia Moraes, Psicóloga

Site institucional de página única (React 19 + Vite + Tailwind CSS 4), com página adicional de Política de Privacidade em `/politica-de-privacidade`.

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local em http://localhost:3000
```

## Produção

```bash
npm run build    # gera a pasta dist/
npm run preview  # pré-visualiza o build localmente
```

O conteúdo de `dist/` é estático e pode ser hospedado em qualquer serviço (Vercel, Netlify, Cloudflare Pages, etc.).

## Deploy no Netlify (gratuito)

O projeto já inclui o arquivo `netlify.toml` com tudo configurado. Você tem **duas opções**:

### Opção A — Conectar ao GitHub (recomendado)

1. Suba este projeto para um repositório no GitHub.
2. Acesse <https://app.netlify.com> e faça login com o GitHub.
3. Clique em **Add new site → Import an existing project** e escolha o repositório.
4. O Netlify lê o `netlify.toml` automaticamente. Confirme apenas:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **Deploy**. A cada `git push` o site é recompilado e publicado sozinho.

### Opção B — Arrastar e soltar (mais rápido, sem GitHub)

```bash
npm run build
```

1. Acesse <https://app.netlify.com/drop>.
2. Arraste a pasta **`dist/`** para a página.
3. Pronto — seu site fica no ar em segundos com um endereço `*.netlify.app`.

> Em ambas as opções o Netlify oferece HTTPS e domínio `*.netlify.app` gratuitos.
> Você pode conectar um domínio próprio (ex.: `psijamilleom.com.br`) em **Site settings → Domain management**, sem custo adicional do Netlify.

### Rota `/politica-de-privacidade`

O arquivo `public/_redirects` (copiado para `dist/_redirects` no build) faz o Netlify servir o `index.html` para qualquer caminho inexistente, então a página de Política de Privacidade funciona ao recarregar ou acessar diretamente a URL — não precisa de configuração extra.

> **Antes de publicar:** trocar o placeholder `https://SEUDOMINIO.com.br` no `index.html` (dados estruturados/SEO) pelo domínio real.
