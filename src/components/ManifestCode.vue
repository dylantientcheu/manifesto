<template>
  <vs-card>
    <div slot="header">
      <vs-row>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="center"
          vs-w="8"
        >
          <h3>
            manifest.json
          </h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" vs-w="4">
          <vs-button
            color="success"
            type="gradient"
            v-clipboard:copy="manifestCode"
            v-clipboard:success="onCopy"
            v-clipboard:error="onCopyError"
            >Copy</vs-button
          >
        </vs-col>
      </vs-row>
    </div>
    <div>
      <pre v-highlightjs="manifestCode"><code class="JSON"></code></pre>
    </div>
  </vs-card>
</template>

<script>
export default {
  name: "manifest-code",
  created() {
    this.$bus.on("add-left-data", this.addLeftColData);
    this.$bus.on("add-right-data", this.addRightColData);
    this.$bus.on("add-related-app", this.addRelatedApp);
    this.$bus.on("add-icons", this.addIcons);
  },
  data: () => ({
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
  }),

  methods: {
    addLeftColData(data) {
      console.log(data);
      if (data.appName && this.codeAttributes.appName === "")
        this.codeAttributes.appName = `  "name": "${data.appName}",\n`;

      if (data.shortName && this.codeAttributes.shortName === "")
        this.codeAttributes.shortName = `  "short_name": "${
          data.shortName
        }",\n`;

      if (data.description && this.codeAttributes.description === "")
        this.codeAttributes.description = `  "description": "${
          data.description
        }",\n`;

      if (data.language && this.codeAttributes.language === "")
        this.codeAttributes.language = `  "language": "${data.language}",\n`;

      if (data.dir && this.codeAttributes.dir === "")
        this.codeAttributes.dir = `  "dir": "${data.dir}",\n`;
    },

    addRightColData(data) {
      console.log(data);
      if (data.displayMode)
        this.codeAttributes.displayMode = `  "display": "${
          data.displayMode
        }",\n`;

      if (data.orientation)
        this.codeAttributes.orientation = `  "orientation": "${
          data.orientation
        }",\n`;

      if (data.themeColor)
        this.codeAttributes.themeColor = `  "theme_color": "${
          data.themeColor
        }",\n`;

      if (data.backgroundColor)
        this.codeAttributes.backgroundColor = `  "background_color": "${
          data.backgroundColor
        }",\n`;

      if (data.startUrl)
        this.codeAttributes.startUrl = `  "start_url": "${data.startUrl}",\n`;

      if (data.scope)
        this.codeAttributes.scope = `  "scope": "${data.scope}",\n`;
    },

    addRelatedApp(data) {
      this.tempAppData = "";
      data.forEach(app => {
        console.log("relatedApp", app);
        if (app.id !== "" && app.platform !== "" && app.url !== "")
          this.tempAppData =
            `\n     {\n     "platform": "${app.platform}",\n      "url": "${
              app.url
            }?id=${app.id}"\n     },\n` + this.tempAppData;
      });
      this.codeAttributes.apps = `  "related_applications": [${
        this.tempAppData
      }   ],\n`;
    },

    addIcons(data) {
      this.tempIconsData = "";
      data.forEach(icon => {
        console.log("related_icon", icon);
        if (icon.src !== "" && icon.size !== "" && icon.type !== "")
          this.tempIconsData =
            `\n    {\n     "src": "${icon.src}",\n     "sizes": "${
              icon.size
            }",\n     "type": "${icon.type}"\n    },\n` + this.tempIconsData;
      });
      this.codeAttributes.icons = `  "icons": [${this.tempIconsData}  ]`;
    },

    onCopy: function(e) {
      this.$vs.notify({
        text: "Manifest code to clipboard",
        color: "success"
      });
      console.log("You just copied: " + e.text);
    },
    onCopyError: function() {
      this.$vs.notify({
        text: "Copy failed",
        color: "danger"
      });
      console.log("Failed to copy texts");
    }
  },

  computed: {
    manifestCode() {
      let code = `{

${this.codeAttributes.appName}${this.codeAttributes.shortName}${
        this.codeAttributes.description
      }${this.codeAttributes.dir}${this.codeAttributes.language}${
        this.codeAttributes.displayMode
      }${this.codeAttributes.orientation}${this.codeAttributes.themeColor}${
        this.codeAttributes.backgroundColor
      }${this.codeAttributes.startUrl}${this.codeAttributes.scope}${
        this.codeAttributes.apps
      }${this.codeAttributes.icons}
}`;
      return code;
    }
  }
};
</script>

<style lang="scss">
.hljs {
  font-size: 0.7rem;
  word-wrap: normal;
  background: none;
  color: #028090;
  font-family: "Overpass Mono", monospace;
}

p {
  font-family: Lato;
}

.hljs-attr {
  color: #02c39a !important;
}

.hljs-string {
  color: #05668d !important;
}
</style>
