<template>
  <div>
    <div id="first-t-first">
      <h2 class="font-bold text-2xl">
        <n-gradient-text type="info">
          4. Display & Theming
        </n-gradient-text>
      </h2>
      <label class="text-base section-info">Display mode, theming, and icons</label>
      <div class="mt-3 section-form">
        <n-space vertical>
          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Display mode">
                <n-select
                  v-model:value="information.display"
                  :options="displayItems"
                  class=""
                  type="input"
                  @blur="addData()"
                />
              </n-form-item>
            </template>
            The display member is a string that determines the developers’ preferred display mode for the website. The display mode changes how much of browser UI is shown to the user and can range from browser (when the full browser window is shown) to fullscreen (when the app is full-screened).
          </n-tooltip>

          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Orientation">
                <n-select
                  v-model:value="information.orientation"
                  :options="orientationItems"
                  class=""
                  type="input"
                  @blur="addData()"
                />
              </n-form-item>
            </template>
            The orientation member defines the default orientation for all the website's top-level browsing contexts.
          </n-tooltip>

          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Theme color">
                <n-color-picker v-model:value="information.theme_color" :show-alpha="false" @on-complete="addData()" />
              </n-form-item>
            </template>
            The theme_color member is a string that defines the default theme color for the application. This sometimes affects how the OS displays the site (e.g., on Android's task switcher, the theme color surrounds the site).
          </n-tooltip>

          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Background color">
                <n-color-picker v-model:value="information.background_color" :show-alpha="false" @on-complete="addData()" />
              </n-form-item>
            </template>
            The background_color member defines a placeholder background color for the application page to display before its stylesheet is loaded. This value is used by the user agent to draw the background color of a shortcut when the manifest is available before the stylesheet has loaded.
          </n-tooltip>
        </n-space>
      </div>
    </div>

    <br>

    <div id="app-id">
      <h2 class="font-bold text-2xl">
        <n-gradient-text type="info">
          5. PWA Entry Setup
        </n-gradient-text>
      </h2>
      <label class="text-base section-info">Manifest's scopes throughout the app</label>
      <div class="my-4 section-form">
        <n-space vertical>
          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Start url">
                <n-input
                  v-model:value="information.start_url"
                  type="input"
                  placeholder="./index.html"
                  @blur="addData()"
                />
              </n-form-item>
            </template>
            The start_url member is a string that represents the start URL of the web application — the preferred URL that should be loaded when the user launches the web application (e.g., when the user taps on the web application's icon from a device's application menu or homescreen).
          </n-tooltip>
          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Scope">
                <n-input
                  v-model:value="information.scope"
                  type="input"
                  placeholder="./"
                  @blur="addData()"
                />
              </n-form-item>
            </template>
            The scope member is a string that defines the navigation scope of this web application's application context. It restricts what web pages can be viewed while the manifest is applied. If the user navigates outside the scope, it reverts to a normal web page inside a browser tab or window.
            If the scope is a relative URL, the base URL will be the URL of the manifest.
          </n-tooltip>
        </n-space>
      </div>
    </div>

    <div id="rel-apps" class="my-5">
      <div>
        <h2 class="font-bold text-2xl">
          <n-gradient-text type="info">
            6. Icons
          </n-gradient-text>
        </h2>

        <label class="section-info">App's icons in various available sizes, define and link them to your app.</label>

        <div class="mt-3 section-form">
          <n-dynamic-input v-model:value="information.icons" :on-create="addIcon">
            <template #="{ value }">
              <div style="width: 100%;">
                <n-input-group>
                  <n-input v-model:value="value.src" placeholder="./icons" :style="{ width: '33%' }" type="input" @blur="addData" />
                  <n-input v-model:value="value.type" placeholder="image/png" :style="{ width: '33%' }" type="input" @blur="addData" />
                  <n-input v-model:value="value.size" placeholder="48x48" :style="{ width: '33%' }" type="input" @blur="addData" />
                </n-input-group>
              </div>
            </template>
          </n-dynamic-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useManifestoStore } from '~/store'

export default defineComponent({
  name: 'MoreAttributes',
  setup() {
    const manifeStore = useManifestoStore()
    const information = reactive({
      display: '',
      orientation: '',
      theme_color: '#028090',
      background_color: '#05668d',
      start_url: '',
      scope: '',
      icons: [{ src: '', type: '', size: '' }] as any,
    })

    const displayItems = ref([
      {
        value: 'standalone',
        label: 'Standalone',
      },
      {
        value: 'fullscreen',
        label: 'Fullscreen',
      },
      {
        value: 'minimal-ui',
        label: 'Minimalistic UI',
      },
      {
        value: 'browser',
        label: 'Browser',
      },
    ])
    const orientationItems = ref([
      {
        value: 'any',
        label: 'Any',
      },
      {
        value: 'landscape',
        label: 'Landscape',
      },
      {
        value: 'landscape-primary',
        label: 'Landscape-primary',
      },
      {
        value: 'landscape-secondary',
        label: 'Landscape-secondary',
      },
      {
        value: 'portrait',
        label: 'Portrait',
      },
      {
        value: 'portrait-primary',
        label: 'Portrait-primary',
      },
      {
        value: 'portrait-secondary',
        label: 'Portrait-secondary',
      },
      {
        value: 'natural',
        label: 'Natural',
      },
    ])

    const addData = () => {
      manifeStore.$patch({
        display: information.display,
        orientation: information.orientation,
        theme_color: information.theme_color,
        start_url: information.start_url,
        background_color: information.background_color,
        scope: information.scope,
        icons: information.icons,
      })
    }
    const addIcon = () => {
      return {
        src: '', type: '', size: '',
      }
    }

    return { information, addData, orientationItems, displayItems, addIcon }
  },
})
</script>

<style></style>
