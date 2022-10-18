import { createApp } from "vue";
import "./styles/style.scss";
import "./styles/page.scss";
import "./assets/icon/iconfont.css";
import App from "./App.vue";
import store from "./store";
// @ts-ignore
import contextmenu from "vue3-contextmenu";
import "vue3-contextmenu/dist/vue3-contextmenu.css";

createApp(App).use(store).use(contextmenu).mount("#app");
