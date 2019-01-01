import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuesax from "vuesax";
import VueHighlightJS from "vue-highlightjs";
import VueClipboard from "vue-clipboard2";
import VueBus from "vue-bus";

import "./registerServiceWorker";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";

Vue.use(VueHighlightJS);
Vue.use(VueClipboard);
Vue.use(Vuesax);
Vue.use(VueBus);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
