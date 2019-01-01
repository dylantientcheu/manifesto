<template>
  <div class="con-type-example">
    <vs-navbar
      type="gradient"
      v-model="activeItem"
      class="navbarx"
    >
      <vs-navbar-title>
        <img
          src="../assets/logo.png"
          alt="logo"
        >
      </vs-navbar-title>
      <vs-spacer></vs-spacer>

      <vs-navbar-item>
        <a
          href="https://www.w3.org/TR/appmanifest/"
          target="_blank"
          rel="noopener noreferrer"
        >W3 Specs</a>
      </vs-navbar-item>
      <vs-navbar-item>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Manifest"
          target="_blank"
          rel="noopener noreferrer"
        >MDN Documentation</a>
      </vs-navbar-item>
      <vs-navbar-item>
        <a href="#">Github</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  data: () => ({
    activeItem: 0
  })
};
</script>
<style lang="scss" scoped>
.navbarx {
  padding: 1%;
  position: fixed;
  background: rgba(255, 255, 255, 0.7) !important;
}

@media screen and (max-width: 600px) {
  .navbarx {
    padding: 1%;
    position: fixed;
    background: rgba(255, 255, 255, 0.8) !important;
  }
}

img {
  width: 100px;
  height: auto;
}
</style>
