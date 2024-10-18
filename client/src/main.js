import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "material-icons/iconfont/filled.css";
import "material-icons/iconfont/material-icons.css";
import "material-icons/iconfont/outlined.css";
import "material-icons/iconfont/round.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const appInstance = createApp(App);

appInstance.use(router);
appInstance.use(vuetify);

appInstance.mount("#app");
