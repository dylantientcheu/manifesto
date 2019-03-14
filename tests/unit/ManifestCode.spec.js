// import vue test utilities
import { shallowMount } from "@vue/test-utils";

// import vue and libraries
import Vue from "vue";
import VueBus from "vue-bus";
import Vuesax from "vuesax";
import VueHighlightJS from "vue-highlightjs";
import VueClipboard from "vue-clipboard2";

// import components
import ManifestCode from "@/components/ManifestCode.vue";

// declare the use of libraries
Vue.use(VueHighlightJS);
Vue.use(VueClipboard);
Vue.use(VueBus);
Vue.use(Vuesax);

describe("Identification Component", () => {
  // Inspect the raw component options
  it("has a created hook", () => {
    expect(typeof ManifestCode.created).toBe("function");
  });

  // Inspect the raw components options
  it("sets the correct default data", () => {
    expect(typeof ManifestCode.data).toBe("function");
    const defaultData = ManifestCode.data();
    expect(defaultData).toEqual({
      codeAttributes: {
        appName: "",
        shortName: "",
        description: "",
        language: "",
        dir: "",
        displayMode: "",
        orientation: "",
        themeColor: "",
        backgroundColor: "",
        startUrl: "",
        scope: "",
        apps: "",
        icons: "",
        tempIconsData: "",
        tempAppData: ""
      }
    });
  });

  // Check if the appropriate code is added to the manifest
  it("sets the correct data to the manifest code", () => {
    const codeBox = shallowMount(ManifestCode);
    const obj = {
      appName: "a test name"
    };
    codeBox.vm.addLeftColData(obj);
    expect(codeBox.html()).toContain("a test name");
  });

  // TODO: Check copy the functionality.
  // it("when the copy button is clicked, verify the notify and check the clipboard", () => {});
});
