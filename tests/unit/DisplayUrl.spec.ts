/* // import vue test utilities
import { shallowMount } from "@vue/test-utils";

// import vue and libraries
import Vue from "vue";


// import components
import DisplayUrl from "@/components/DisplayUrl.vue";
import ManifestCode from "@/components/ManifestCode.vue";


describe("Identification Component", () => {
  // Inspect the raw components options
  it("sets the correct default data", () => {
    expect(typeof DisplayUrl.data).toBe("function");
    const defaultData = DisplayUrl.data();
    expect(defaultData).toEqual({
      displayMode: "",
      orientation: "",
      themeColor: "",
      backgroundColor: "",
      startUrl: "",
      scope: "",
      displays: [
        {
          value: "standalone",
          text: "Standalone"
        },
        {
          value: "fullscreen",
          text: "Fullscreen"
        },
        {
          value: "minimal-ui",
          text: "Minimalistic UI"
        },
        {
          value: "browser",
          text: "Browser"
        }
      ],
      orientations: [
        {
          value: "any",
          text: "Any"
        },
        {
          value: "landscape",
          text: "Landscape"
        },
        {
          value: "landscape-primary",
          text: "Landscape-primary"
        },
        {
          value: "landscape-secondary",
          text: "Landscape-secondary"
        },
        {
          value: "portrait",
          text: "Portrait"
        },
        {
          value: "portrait-primary",
          text: "Portrait-primary"
        },
        {
          value: "portrait-secondary",
          text: "Portrait-secondary"
        },
        {
          value: "natural",
          text: "Natural"
        }
      ],
      icons: [{ src: "", type: "", size: "" }, { src: "", type: "", size: "" }]
    });
  });

  // Check if the appropriate code is added to the manifest
  it("sets the correct data to the manifest code", () => {
    const codeBox = shallowMount(ManifestCode);
    const displayUrl = shallowMount(DisplayUrl);
    displayUrl.vm.startUrl = "Test Url";
    displayUrl.vm.addData();
    expect(codeBox.html()).toContain("Test Url");
  });
});
 */