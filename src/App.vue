<script lang="ts">
import { defineComponent } from 'vue'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('json', json)
hljs.registerLanguage('html', xml)

export default defineComponent({
  name: 'App',
  setup() {
    return {
      hljs,
    }
  },
})
</script>

<template>
  <n-config-provider :hljs="hljs">
    <n-message-provider>
      <div id="app">
        <n-layout>
          <n-layout-header><app-header /></n-layout-header>
          <n-layout-content>
            <div class="flex flex-wrap">
              <div class="order-first min-h-screen w-full p-4 lg:order-none lg:w-1/3">
                <identification></identification>
              </div>
              <div class="bg-gradient-to-r rounded-lg order-last min-h-screen from-rose-100 to-teal-100 w-full p-4 lg:order-none lg:w-1/3">
                <manifest-code></manifest-code>
              </div>
              <div class="min-h-screen order-1 w-full p-4 lg:order-none lg:w-1/3">
                <more-attributes></more-attributes>
              </div>
            </div>
          </n-layout-content>
        </n-layout>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
h2,h3,h4,h1 {
  font-family: "Oxygen", sans-serif !important;
  color: #05668d;
  font-weight: bold;
}

hr {
  width: 7rem;
  border: 1.5px solid;
  color: #02c39a;
  margin: 5px 0 2px 0;
}

#app {
  font-family: "Oxygen", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
