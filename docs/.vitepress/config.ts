// .vitepress/config.ts
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'TechPC System',
  description: 'Sistema de Gestão para Loja e Assistência de PCs',
  themeConfig: {
    nav: [
      { text: 'Início (Cliente)', link: '/' },
      { text: 'Login', link: '/login' },
    ],
    sidebar: [
      {
        text: 'Painéis do Sistema',
        items: [
          { text: 'Painel do Cliente', link: '/' },
          { text: 'Painel do Vendedor', link: '/vendedor' },
          { text: 'Painel do Técnico', link: '/tecnico' },
          { text: 'Estoque Central', link: '/estoque' },
          { text: 'Painel da Gerência', link: '/gerente' },
        ],
      },
    ],
  },
});
