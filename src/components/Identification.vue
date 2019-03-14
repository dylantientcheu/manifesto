<template>
  <div>
    <div id="first-t-first">
      <vs-row>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-w="10"
        >
          <h2>First Things First</h2>
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
      <label class="section-info"
        >Link the manifest to your app by adding this in your app's entry HTML
        file</label
      >
      <div class="section-form">
        <vs-card>
          <div slot="header">
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="flex-start"
                vs-align="center"
                vs-w="8"
              >
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="flex-end"
                vs-align="center"
                vs-w="4"
              >
                <vs-button
                  color="success"
                  type="gradient"
                  v-clipboard:copy="htmlCode"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onCopyError"
                  >Copy</vs-button
                >
              </vs-col>
            </vs-row>
          </div>
          <div>
            <pre v-highlightjs="htmlCode"><code class="html"></code></pre>
          </div>
        </vs-card>
      </div>
    </div>

    <br />
    <br />

    <div id="app-id">
      <vs-row>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-w="10"
        >
          <h2>App Identification</h2>
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
      <label class="section-info">Name, description and app's Language</label>
      <div class="section-form">
        <vs-tooltip
          color="#05668d"
          text="Provides a human-readable name for the site when displayed to the user. For example, among a list of other applications or as a label for an icon."
          position="bottom"
          delay=".5s"
        >
          <vs-input
            label="App Name"
            v-model="appName"
            placeholder="Manifesto"
            @blur="addData()"
          />
        </vs-tooltip>
        <vs-tooltip
          color="#05668d"
          text="Provides a short human-readable name for the application. This is intended for when there is insufficient space to display the full name of the web application, like device homescreens."
          position="bottom"
          delay=".5s"
        >
          <vs-input
            label="Short Name"
            v-model="shortName"
            placeholder="Manifesto"
            @blur="addData()"
          />
        </vs-tooltip>

        <vs-tooltip
          color="#05668d"
          text="Provides a general description of what the pinned website does."
          position="bottom"
          delay=".5s"
        >
          <vs-input
            label="Description"
            placeholder="The app that helps you generate your manifest!"
            v-model="description"
            @blur="addData()"
          />
        </vs-tooltip>

        <vs-tooltip
          color="#05668d"
          text="Specifies the primary text direction for the name, short_name, and description members. Together with the lang member, it helps the correct display of right-to-left languages."
          position="bottom"
          delay=".5s"
        >
          <vs-input
            @blur="addData()"
            label="Dir"
            v-model="dir"
            placeholder="rtl"
          />
        </vs-tooltip>

        <vs-tooltip
          color="#05668d"
          text="Specifies the primary language for the values in the name and short_name members. This value is a string containing a single language tag."
          position="bottom"
          delay=".5s"
        >
          <vs-input
            @blur="addData()"
            label="Language"
            v-model="language"
            placeholder="en-US"
          />
        </vs-tooltip>
      </div>
    </div>

    <br /><br /><br />

    <div id="rel-apps">
      <vs-row>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-w="10"
        >
          <h2>Related Apps</h2>
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
      <label class="section-info"
        >Ability to grab the native app. This should only be used if the related
        native apps really do offer something that the website can't.</label
      >

      <div class="section-form">
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="flex-start"
            vs-align="center"
            vs-w="10"
          >
            <h3>Prefer Related Apps</h3>
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
              @click="addApp"
            ></vs-button>
            <vs-button
              color="danger"
              type="line"
              icon="remove_circle_outline"
              @click="removeApp"
            ></vs-button>
          </vs-col>
        </vs-row>

        <vs-row
          v-for="(app, index) in apps"
          :key="index"
          vs-justify="space-around"
          vs-align="space-around"
          vs-type="flex"
        >
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="flex-start"
            vs-w="3"
          >
            <vs-tooltip
              color="#05668d"
              text="Platform of the related app"
              position="bottom"
              delay="1s"
            >
              <vs-input
                @blur="addRelatedApp()"
                label="platform"
                v-model="app.platform"
                placeholder="play"
              />
            </vs-tooltip>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <vs-tooltip
              color="#05668d"
              text="The url of the related app."
              position="bottom"
              delay="1s"
            >
              <vs-input
                @blur="addRelatedApp()"
                label="url"
                v-model="app.url"
                placeholder="https://play.google.com/store/apps/details?id=com.example.app1"
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
              text="App's package name"
              position="bottom"
              delay="1s"
            >
              <vs-input
                @blur="addRelatedApp()"
                label="id"
                v-model="app.id"
                placeholder="com.example.app1"
              />
            </vs-tooltip>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // this is the left column component
  name: "identification",
  data: () => ({
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
  }),
  methods: {
    addApp() {
      const appsObj = { platform: "", id: "", url: "" };
      this.apps.push(appsObj);
    },
    removeApp() {
      if (this.apps.length > 0) this.apps.pop();
    },
    addData() {
      const data = {
        appName: this.appName,
        shortName: this.shortName,
        description: this.description,
        language: this.language,
        dir: this.dir
      };

      this.$bus.emit("add-left-data", data);
      this.$bus.emit("once");
    },

    addRelatedApp() {
      this.$bus.emit("add-related-app", this.apps);
      this.$bus.emit("once");
    },

    onCopy: function(e) {
      this.$vs.notify({
        text: "Copied to clipboard",
        color: "success"
      });
      console.log("You just copied: " + e.text);
    },

    onCopyError: function() {
      this.$vs.notify({
        text: "Copy failed, try again.",
        color: "danger"
      });
      console.log("Failed to copy texts");
    }
  }
};
</script>

<style></style>
