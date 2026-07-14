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

> **Antes de publicar:** trocar o placeholder `https://SEUDOMINIO.com.br` no `index.html` (dados estruturados/SEO) pelo domínio real.
