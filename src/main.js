import { createApp } from "vue";
import App from "./App.vue";
import Person from "./components/FriendContact.vue";
import AddPerson from "./components/AddPerson";

const app = createApp(App);

app.component("person", Person);
app.component("add-person", AddPerson);

app.mount("#app");
