import { createApp } from "vue";
import "./styles/style.scss";
import "./styles/page.scss";
import "./assets/icon/iconfont.css";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store).mount("#app");
