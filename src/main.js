import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "flowbite";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faJava,
  faPython,
  faJs,
  faVuejs,
  faBootstrap,
  faGit,
  faReact,
  faNpm,
  faAws,
  faGoogle,
  faMicrosoft,
  faDocker,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMoon,
  faSun,
  faCartPlus,
  faHouse,
  faCartShopping,
  faBars,
  faCaretLeft,
  faXmark,
  faArrowRight,
  faC,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(
  faMoon,
  faSun,
  faCartPlus,
  faHouse,
  faCartShopping,
  faBars,
  faCaretLeft,
  faXmark,
  faArrowRight,
  faC,
  faCode,
  faLinkedin,
  faGithub,
  faTwitter,
  faJava,
  faPython,
  faJs,
  faVuejs,
  faBootstrap,
  faGit,
  faReact,
  faNpm,
  faEnvelope,
  faAws,
  faGoogle,
  faMicrosoft,
  faDocker,
  faSquareGithub
);

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
