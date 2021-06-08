
<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent, reactive } from 'vue'
import { useManifestoStore } from '~/store'

export default defineComponent({
  name: 'Identification',
  setup() {
    const message = useMessage()
    const manifeStore = useManifestoStore()
    const information = reactive({
      appName: '',
      shortName: '',
      description: '',
      lang: '',
      dir: '',
      preferRelatedApps: false,
      categories: '',
      htmlCode: `<head>
  <link rel="manifest" href="manifest.json">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>`,
      apps: [{ platform: '', id: '', url: '' }],
    })

    const addData = () => {
      manifeStore.$patch({
        name: information.appName,
        short_name: information.shortName,
        description: information.description,
        lang: information.lang,
        dir: information.dir,
        categories: information.categories,
      })
    }

    const copyText = async() => {
      try {
        await navigator.clipboard.writeText(information.htmlCode)
        message.success('Text copied', {})
      }
      catch (e) {
        message.error('An error occured while copying text', {})
      }
    }

    const removeApp = () => {
      /* console.log(information) */
    }
    const addApp = () => {
      return {
        platform: '', id: '', url: '',
      }
      /* console.log(information) */
    }
    const addRelatedApp = () => {
      /* console.log(information) */
    }

    return { information, addData, copyText, removeApp, addApp, addRelatedApp }
  },
})
</script>

<template>
  <div>
    <div id="first-t-first">
      <h2 class="font-bold text-2xl">
        <n-gradient-text type="info">
          1. First Things First
        </n-gradient-text>
      </h2>
      <p
        class="py-2 section-info"
      >
        Link the manifest to your app by adding this in your app's entry HTML
        file
      </p>
      <div class="section-form">
        <n-card class="shadow-xl my-4">
          <n-button class="top-1 right-1 absolute" size="tiny" type="primary" dashed @click="copyText">
            <ic:twotone-copy-all />
            Copy
          </n-button>

          <div style="overflow: auto;">
            <n-space vertical :size="16">
              <n-code
                :code="information.htmlCode"
                language="html"
              />
            </n-space>
          </div>
          <span class="text-xs text-gray-300 float-right" size="tiny" type="primary" dashed>
            index.html
          </span>
        </n-card>
      </div>
    </div>

    <div id="app-id">
      <h2 class="font-bold text-2xl">
        <n-gradient-text type="info">
          2. App Identification
        </n-gradient-text>
      </h2>
      <label class="text-base section-info">Name, description and app's Language</label>
      <div class="my-4 section-form">
        <n-space vertical>
          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="App Name">
                <n-input
                  v-model:value="information.appName"
                  class=""
                  type="input"
                  placeholder="Manifesto"
                  @blur="addData"
                />
              </n-form-item>
            </template>
            Provides a human-readable name for the site when displayed to the user. For example, among a list of other applications or as a label for an icon.
          </n-tooltip>

          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Shortname">
                <n-input
                  v-model:value="information.shortName"
                  class=""
                  type="input"

                  placeholder="Manifesto"
                  @blur="addData"
                />
              </n-form-item>
            </template>
            Provides a short human-readable name for the application. This is intended for when there is insufficient space to display the full name of the web application, like device homescreens.
          </n-tooltip>

          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Description">
                <n-input
                  v-model:value="information.description"
                  class=""
                  type="input"

                  placeholder="The app that helps you generate your manifest!"
                  @blur="addData"
                />
              </n-form-item>
            </template>
            Provides a general description of what the pinned website does.
          </n-tooltip>

          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Categories">
                <n-input
                  v-model:value="information.categories"
                  type="input"

                  placeholder="['Education', 'Food', 'Delivery']"
                  @blur="addData"
                />
              </n-form-item>
            </template>
            The categories member is an array of strings defining the names of categories that the application supposedly belongs to. There is no standard list of possible values
          </n-tooltip>

          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Direction">
                <n-input
                  v-model:value="information.dir"
                  class=""
                  type="input"

                  placeholder="rtl"
                  @blur="addData"
                />
              </n-form-item>
            </template>
            Specifies the primary text direction for the name, short_name, and description members. Together with the lang member, it helps the correct display of right-to-left languages.
          </n-tooltip>

          <n-tooltip trigger="hover" :style="{ maxWidth: '400px', color: 'white', backgroundColor: '#05668d' }">
            <template #trigger>
              <n-form-item class="mb-1" :show-feedback="false" label="Language">
                <n-input
                  v-model:value="information.lang"
                  class=""
                  type="input"

                  placeholder="en-US"
                  @blur="addData"
                />
              </n-form-item>
            </template>
            Specifies the primary language for the values in the name and short_name members. This value is a string containing a single language tag.
          </n-tooltip>
        </n-space>
      </div>
    </div>

    <div id="rel-apps" class="my-5">
      <div>
        <h2 class="font-bold text-2xl">
          <n-gradient-text type="info">
            3. Related Apps
          </n-gradient-text>
        </h2>

        <label
          class="section-info"
        >Ability to grab the native app. This should only be used if the related
          native apps really do offer something that the website can't.</label>

        <div class="mt-3 section-form">
          <n-dynamic-input v-model:value="information.apps" :on-create="addApp">
            <template #="{ value }">
              <div style="width: 100%;">
                <n-input-group>
                  <n-input v-model:value="value.platform" placeholder="Platform" :style="{ width: '33%' }" type="input" />
                  <n-input v-model:value="value.id" placeholder="id" :style="{ width: '33%' }" type="input" />
                  <n-input v-model:value="value.url" placeholder="url" :style="{ width: '33%' }" type="input" />
                </n-input-group>
              </div>
            </template>
          </n-dynamic-input>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
