import { createApp } from "vue";
import App from "./App.vue";
import Person from "./components/FriendContact.vue";

const app = createApp(App);

app.component("person", Person);

app.mount("#app");
