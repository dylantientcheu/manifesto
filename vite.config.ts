import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

export default defineConfig({
  base: '/manifesto/',
  plugins: [
    Vue(),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),
    ViteIcons(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'manifesto',
        short_name: 'manifesto',
        description: 'A pwa that generates a manifest for your pwa',
        lang: 'en-US',
        orientation: 'any',
        icons: [
          {
            src: './img/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: './img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: './index.html',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4DBA87',
      },
    }),

  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  /* optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  }, */
})
