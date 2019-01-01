<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$accent: #05668d;
$code-background: #f0f3bd;
$fade: #02c39a;

h2,
h3 {
  font-family: "Playfair Display", serif !important;
  color: $accent;
}

hr {
  width: 7rem;
  border: 1.5px solid;
  color: #02c39a;
  margin: 5px 0 2px 0;
}

#app,
.vs-tooltip {
  font-family: "Lato", "Avenir", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vs-con-input-label,
.con-select {
  width: auto !important;
  margin-top: 0.8rem;
}

.vs-input--placeholder {
  opacity: 0.4;
}
</style>
