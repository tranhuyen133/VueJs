import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Style cho các component
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Khởi tạo ứng dụng
const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

// Sử dụng các thư viện bên ngoài
app.use(vuetify);

// Gắn component App vào trong ứng dụng
app.mount("#app");