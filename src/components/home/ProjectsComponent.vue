<script setup>
import { useDataStore } from "@/stores/index.js";

const store = useDataStore();

function redirectTo(url) {
  window.open(url, "_blank");
}
</script>

<template>
  <section id="projects" class="bg-transparent dark:bg-transparent py-16">
    <div class="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h1
          class="my-4 text-4xl leading-none text-black md:text-5xl lg:text-6xl dark:text-white"
        >
          <span
            class="font-mono text-transparent font-medium bg-clip-text bg-black dark:bg-white"
            >Projects
          </span>
        </h1>
        <p class="font-light text-black sm:text-xl dark:text-gray-400">
          Projects I have worked on!
        </p>
      </div>
      <div
        class="w-full p-4 bg-emerald-500 border border-gray-200 rounded-lg shadow-2xl sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <ol class="relative border-l border-indigo-200 dark:border-gray-700">
          <template v-for="project of store.projects" :key="project.id">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></div>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-100 dark:text-gray-500"
                >Released on
                {{
                  project.date_published.toDate().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}</time
              >
              <h3
                class="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
              >
                {{ project.name
                }}<span
                  class="hidden md:inline bg-blue-100 text-emerald-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-emerald-900 dark:text-emerald-300 ml-3"
                  >{{ project.development }}</span
                >
              </h3>
              <span
                class="inline md:hidden bg-blue-100 text-emerald-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-emerald-900 dark:text-emerald-300"
                >{{ project.development }}</span
              >
              <p
                class="my-4 text-base font-normal text-white dark:text-gray-400"
              >
                {{ project.description }}
              </p>
              <div
                class="flex flex-col md:flex-row items-start md:items-center md:space-x-4 space-y-2 md:space-y-0"
              >
                <template
                  v-if="
                    project.link_github != '' &&
                    project.hasOwnProperty('link_github')
                  "
                  ><button
                    type="button"
                    @click="redirectTo(project.link_github)"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <font-awesome-icon
                      icon="fa-brands fa-github"
                      class="w-4 h-4 fill-current text-black dark:text-white mr-2"
                      beat
                      style="--fa-animation-duration: 5s"
                    />
                    GitHub
                  </button>
                </template>
                <template
                  v-if="
                    project.link_website != '' &&
                    project.hasOwnProperty('link_website')
                  "
                >
                  <button
                    type="button"
                    @click="redirectTo(project.link_website)"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Look at the project
                    <font-awesome-icon
                      class="ml-2"
                      icon="fa-solid fa-arrow-right"
                    />
                  </button>
                </template>
              </div>
            </li>
          </template>
        </ol>
      </div>
    </div>
  </section>
</template>
