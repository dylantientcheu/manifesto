<template>
  <div>
    <NavBar></NavBar>
    <div class="content">
      <vs-row>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-w="4"
          vs-xs="12"
        >
          <div class="manifest-side-section">
            <identification></identification>
          </div>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="flex-start"
          vs-w="4"
          id="code-box"
          vs-xs="12"
        >
          <div class="manifest-section">
            <manifest-code></manifest-code>
          </div>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-w="4"
          vs-xs="12"
        >
          <div class="manifest-side-section">
            <display-url></display-url>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import Identification from "@/components/Identification";
import ManifestCode from "@/components/ManifestCode";
import DisplayUrl from "@/components/DisplayUrl";

export default {
  components: {
    NavBar,
    Identification,
    ManifestCode,
    DisplayUrl
  }
};
</script>

<style lang="scss">
#code-box {
  background-color: #f0f3bd;
  overflow-y: auto;
  background-size: cover;
}

.section-info {
  font-size: 0.8rem;
  opacity: 0.5;
}

.section-form {
  margin-top: 1.5rem;
}

.manifest-section {
  margin-top: 4rem;
  padding: 10%;
  width: 100%;
}

.manifest-side-section {
  width: 100%;
  padding: 10%;
  margin-top: 4rem;
}
</style>
