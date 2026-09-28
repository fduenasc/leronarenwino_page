<template>
  <header class="sticky top-0 z-50">
    <nav
      class="bg-emerald-300 border-gray-900 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <router-link
          to="/"
          class="order-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-300 p-2.5 text-sm text-black hover:bg-emerald-200 lg:order-1 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          aria-label="Home"
        >
          <font-awesome-icon
            class="h-3 w-3 dark:text-white"
            icon="fa-solid fa-house"
            beat
            style="--fa-animation-duration: 5s; --fa-beat-scale: 1.5"
          />
        </router-link>

        <!-- Botón de cambio de tema -->
        <div class="flex items-center lg:order-3">
          <button
            id="theme-toggle"
            type="button"
            class="w-10 h-10 text-black bg-emerald-300 hover:bg-emerald-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 rounded-lg p-2.5"
            @click="toggleTheme"
          >
            <font-awesome-icon
              v-if="isDarkTheme"
              icon="fa-solid fa-sun"
              class="fill-current"
              beat
              style="--fa-animation-duration: 5s; --fa-beat-scale: 1.5"
            />
            <font-awesome-icon
              v-else
              icon="fa-solid fa-moon"
              class="fill-current"
              beat
              style="--fa-animation-duration: 5s; --fa-beat-scale: 1.5"
            />
          </button>
        </div>

        <!-- Menú de navegación para pantallas pequeñas -->
        <div
          v-show="$route.path === '/'"
          class="flex items-center lg:hidden lg:order-3"
        >
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="w-10 h-10 items-center text-dark rounded-lg lg:hidden hover:bg-emerald-200 focus:outline-none dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <font-awesome-icon
              class="fill-current"
              icon="fa-solid fa-bars"
              beat
              style="--fa-animation-duration: 5s; --fa-beat-scale: 1.5"
            />
          </button>
        </div>

        <!-- Menú de navegación para pantallas grandes -->
        <div
          v-show="$route.path === '/'"
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2"
          id="navbar-default"
        >
          <ul
            class="flex flex-col item font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <button
                type="button"
                class="block w-full py-2 pr-4 pl-3 text-center text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                @click="scrollToSection('about')"
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full py-2 pr-4 pl-3 text-center text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                @click="scrollToSection('projects')"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full py-2 pr-4 pl-3 text-center text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                @click="scrollToSection('skills')"
              >
                Skills
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { scrollToSection } from "@/utils/scrollToSection.js";

export default {
  name: "HeaderComponent",
  data() {
    return {
      isDarkTheme:
        localStorage.getItem("color-theme") === "dark" ||
        (!localStorage.getItem("color-theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    };
  },
  methods: {
    scrollToSection,
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.documentElement.classList.toggle("dark", this.isDarkTheme);
      localStorage.setItem("color-theme", this.isDarkTheme ? "dark" : "light");
    },
  },
  mounted() {
    if (this.isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
};
</script>
