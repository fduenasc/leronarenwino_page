import { createApp } from "vue";
import { createPinia } from "pinia";
const pinia = createPinia();
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "flowbite";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
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

/* add icons to the library */
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
);

const app = createApp(App);

app.use(router);
app.use(pinia);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (themeToggleDarkIcon && themeToggleLightIcon) {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }
}

const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn && themeToggleDarkIcon && themeToggleLightIcon) {
  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
}
