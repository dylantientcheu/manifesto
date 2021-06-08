
<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useManifestoStore } from '~/store'

const manifeStore = useManifestoStore()
const message = useMessage()

const copyText = async() => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(manifeStore.getCode, null, 2))
    message.success('Text copied', {})
  }
  catch (e) {
    message.error('An error occured while copying text', {})
  }
}

</script>
<template>
  <div>
    <n-card class="shadow-2xl">
      <n-button class="top-1 right-1 absolute" size="tiny" type="primary" dashed @click="copyText">
        <template #icon>
          <n-icon>
            <ic:twotone-copy-all />
          </n-icon>
        </template>
        Copy
      </n-button>

      <div style="overflow: auto;">
        <n-space vertical :size="16">
          <n-code
            :code="JSON.stringify(manifeStore.getCode, null, 2)"
            language="json"
          />
        </n-space>
      </div>

      <span class="text-xs text-gray-300 float-right" size="tiny" type="primary" dashed>
        manifest.json
      </span>
    </n-card>
  </div>
</template>

<style scoped>

</style>
