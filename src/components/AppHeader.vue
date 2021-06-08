<template>
  <nav class="bg-white flex flex-wrap p-4 items-center justify-between">
    <div class="w-auto lg:text-center lg:order-2 lg:w-1/5">
      <a class="font-semibold font-heading text-xl text-gray-800" href="/">
        <n-gradient-text
          gradient="linear-gradient(90deg, blue 100%, red 84%, green 50% )"
        >
          {manifesto}
        </n-gradient-text>

      </a>
    </div>
    <div class="block lg:hidden">
      <button class="border rounded flex border-indigo-500 py-2 px-3 text-indigo-500 navbar-burger items-center">
        <svg class="h-3 fill-current w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>
            Menu
          </title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
          </path>
        </svg>
      </button>
    </div>
    <div class="w-full navbar-menu hidden lg:block lg:order-1 lg:w-2/5">
      <a href="https://dylantientcheu.dev" target="_blank" class="mt-4 mr-10 text-blue-900 block lg:inline-block lg:mt-0 hover:text-indigo-600">
        DT
      </a>
    </div>
    <div class="w-full navbar-menu hidden lg:block lg:text-right lg:order-3 lg:w-2/5">
      <a href="https://github.com/blurdylan" target="_blank" class="mt-4 text-center mr-10 text-blue-900 block lg:inline-block lg:mt-0 hover:text-indigo-600">
        <logos:github-icon /> Github
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" class="mt-4 text-center text-blue-900 block lg:inline-block lg:mt-0 hover:text-indigo-600">
        <logos:mdn />
        MDN
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
