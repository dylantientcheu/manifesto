// import vue test utilities
import { shallowMount } from "@vue/test-utils";

// import vue and libraries
import Vue from "vue";
import VueBus from "vue-bus";
import Vuesax from "vuesax";
import VueHighlightJS from "vue-highlightjs";
import VueClipboard from "vue-clipboard2";

// import components
import Identification from "@/components/Identification.vue";
import ManifestCode from "@/components/ManifestCode.vue";

// declare the use of libraries
Vue.use(VueHighlightJS);
Vue.use(VueClipboard);
Vue.use(VueBus);
Vue.use(Vuesax);

describe("Identification Component", () => {
  // Inspect the raw components options
  it("sets the correct default data", () => {
    expect(typeof Identification.data).toBe("function");
    const defaultData = Identification.data();
    expect(defaultData).toEqual({
      appName: "",
      shortName: "",
      description: "",
      language: "",
      dir: "",
      preferRelatedApps: false,
      htmlCode: `<head>
    <link rel="manifest" href="manifest.json">

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>`,
      apps: [{ platform: "", id: "", url: "" }]
    });
  });

  // Check if the appropriate code is added to the manifest
  it("sets the correct data to the manifest code", () => {
    const codeBox = shallowMount(ManifestCode);
    const idComponent = shallowMount(Identification);
    idComponent.vm.appName = "Test Name";
    idComponent.vm.addData();
    expect(codeBox.html()).toContain("Test Name");
  });

  // TODO: Check the copy functionality.
  // it("when the copy button is clicked, verify the notify and check the clipboard", () => {});
});
