<template>
  <div>
    <div id="display">
      <vs-row>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-w="10"
        >
          <h2>Display & Theme Color</h2>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="flex-end"
          vs-align="flex-end"
          vs-w="2"
        >
        </vs-col>
      </vs-row>
      <hr />
      <label class="section-info">Display mode, theming and icons</label>
      <div class="section-form">
        <vs-tooltip
          color="#05668d"
          text="Defines the developers’ preferred display mode for the website."
          position="bottom"
          delay="1.5s"
        >
          <vs-select
            @change="addData()"
            class="selectExample"
            label="Display Mode"
            v-model="displayMode"
          >
            <vs-select-item
              :key="display.value"
              :value="display.value"
              :text="display.text"
              v-for="display in displays"
            />
          </vs-select>
        </vs-tooltip>

        <vs-tooltip
          color="#05668d"
          text="Defines the default orientation for all the website's top level browsing contexts."
          position="bottom"
          delay="1.5s"
        >
          <vs-select
            @change="addData()"
            class="selectExample"
            label="Orientation"
            v-model="orientation"
          >
            <vs-select-item
              :key="orientation.value"
              :value="orientation.value"
              :text="orientation.text"
              v-for="orientation in orientations"
            />
          </vs-select>
        </vs-tooltip>

        <vs-tooltip
          color="#05668d"
          text="Defines the default theme color for an application. This sometimes affects how the OS displays the site (e.g., on Android's task switcher, the theme color surrounds the site).  "
          position="bottom"
          delay=".5s"
        >
          <vs-input
            @blur="addData()"
            label="Theme color"
            v-model="themeColor"
            placeholder="#0240fa"
          />
        </vs-tooltip>

        <vs-tooltip
          color="#05668d"
          text="Defines the expected “background color” for the website."
          position="bottom"
          delay=".5s"
        >
          <vs-input
            @blur="addData()"
            label="Background color"
            v-model="backgroundColor"
            placeholder="#ffffff"
          />
        </vs-tooltip>
        <br />
        <br />
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="flex-start"
            vs-align="center"
            vs-w="10"
          >
            <h3>Icons</h3>
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="flex-end"
            vs-align="center"
            vs-w="2"
          >
            <vs-button
              color="primary"
              type="line"
              icon="add_circle_outline"
              @click="addIcon"
            ></vs-button>
            <vs-button
              color="danger"
              type="line"
              icon="remove_circle_outline"
              @click="removeIcon"
            ></vs-button>
          </vs-col>
        </vs-row>

        <vs-row
          v-for="(icon, index) in icons"
          :key="index"
          vs-type="flex"
          vs-justify="space-around"
        >
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="flex-start"
            vs-w="4"
          >
            <vs-tooltip
              color="#05668d"
              text="Image location."
              position="bottom"
              delay="1s"
            >
              <vs-input
                @blur="addIcons()"
                label="src"
                v-model="icon.src"
                placeholder="./icons/logo.png"
              />
            </vs-tooltip>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
            <vs-tooltip
              color="#05668d"
              text="The type of image choosen."
              position="bottom"
              delay="1s"
            >
              <vs-input
                @blur="addIcons()"
                label="type"
                v-model="icon.type"
                placeholder="image/png"
              />
            </vs-tooltip>
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="flex-end"
            vs-w="3"
          >
            <vs-tooltip
              color="#05668d"
              text="Size of the image."
              position="bottom"
              delay="1s"
            >
              <vs-input
                @blur="addIcons()"
                label="size"
                v-model="icon.size"
                placeholder="48x48"
              />
            </vs-tooltip>
          </vs-col>
        </vs-row>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div id="url">
      <vs-row>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-w="10"
        >
          <h2>URL & Scopes</h2>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="flex-end"
          vs-align="flex-end"
          vs-w="2"
        >
        </vs-col>
      </vs-row>
      <hr />
      <label class="section-info">Manifest's scope throughout the app</label>
      <div class="section-form">
        <vs-tooltip
          color="#05668d"
          text="The URL that loads when a user launches the application (e.g. when added to home screen), typically the index. Note that this has to be a relative URL, relative to the manifest url."
          position="bottom"
          delay=".5s"
        >
          <vs-input
            @blur="addData()"
            label="Start URL"
            v-model="startUrl"
            placeholder="/index.html"
          />
        </vs-tooltip>

        <vs-tooltip
          color="#05668d"
          text="Defines the navigation scope of this website's context. This restricts what web pages can be viewed while the manifest is applied. If the user navigates outside the scope, it returns to a normal web page inside a browser tab/window."
          position="bottom"
          delay=".5s"
        >
          <vs-input
            @blur="addData()"
            label="Scope"
            v-model="scope"
            placeholder="/myapp/"
          />
        </vs-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "display-url",

  data: () => ({
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
  }),

  methods: {
    addIcon() {
      const iconObj = { src: "", type: "", size: "" };
      this.icons.push(iconObj);
    },
    removeIcon() {
      if (this.icons.length > 0) this.icons.pop();
    },

    addData() {
      const data = {
        displayMode: this.displayMode,
        orientation: this.orientation,
        themeColor: this.themeColor,
        backgroundColor: this.backgroundColor,
        startUrl: this.startUrl,
        scope: this.scope
      };

      this.$bus.emit("add-right-data", data);
      this.$bus.emit("once");
    },

    addIcons() {
      this.$bus.emit("add-icons", this.icons);
      this.$bus.emit("once");
    }
  }
};
</script>

<style></style>
