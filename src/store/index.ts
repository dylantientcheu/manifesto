import { defineStore } from 'pinia'

export const useManifestoStore = defineStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: 'main',
  // a function that returns a fresh state
  state: () => ({
    name: '',
    short_name: '',
    description: '',
    categories: '',
    lang: '',
    dir: '',
    display: '',
    orientation: '',
    theme_color: '',
    background_color: '',
    start_url: '',
    scope: '',
    apps: [] as any,
    icons: [] as any,
  }),

  getters: {
    getCode(state) {
      return {
        name: state.name,
        short_name: state.short_name,
        description: state.description,
        categories: state.categories,
        lang: state.lang,
        dir: state.dir,
        display: state.display,
        orientation: state.orientation,
        theme_color: state.theme_color,
        background_color: state.background_color,
        start_url: state.start_url,
        scope: state.scope,
        apps: state.apps,
        icons: state.icons,
      }
    },
  },

  // optional actions
  actions: {
  },
})
