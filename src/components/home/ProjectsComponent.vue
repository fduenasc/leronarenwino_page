<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useDataStore } from "@/stores/index.js";

const { t, locale } = useI18n();
const store = useDataStore();

const dateLocale = computed(() => (locale.value === "es" ? "es-CO" : "en-US"));

function formatReleaseDate(timestamp) {
  return timestamp.toDate().toLocaleDateString(dateLocale.value, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function redirectTo(url) {
  window.open(url, "_blank");
}
</script>

<template>
  <section
    id="projects"
    aria-labelledby="projects-heading"
    class="bg-transparent py-16 dark:bg-transparent"
  >
    <div class="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
        <h2
          id="projects-heading"
          class="my-4 text-4xl font-medium leading-none text-black md:text-5xl lg:text-6xl dark:text-white"
        >
          {{ t("projects.title") }}
        </h2>
        <p class="font-light text-black sm:text-xl dark:text-gray-400">
          {{ t("projects.subtitle") }}
        </p>
      </div>
      <div
        class="w-full rounded-lg border border-gray-200 bg-emerald-500 p-4 shadow-2xl sm:p-8 dark:border-gray-700 dark:bg-gray-800"
      >
        <ol class="relative border-l border-indigo-200 dark:border-gray-700">
          <template v-for="project of store.projects" :key="project.id">
            <li class="mb-10 ml-4">
              <div
                class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-emerald-200 dark:border-gray-900 dark:bg-gray-700"
              ></div>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-100 dark:text-gray-500"
              >
                {{
                  t("projects.releasedOn", {
                    date: formatReleaseDate(project.date_published),
                  })
                }}
              </time>
              <h3
                class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                {{ project.name
                }}<span
                  class="ml-3 mr-2 hidden rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-emerald-800 md:inline dark:bg-emerald-900 dark:text-emerald-300"
                  >{{ project.development }}</span
                >
              </h3>
              <span
                class="inline rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-emerald-800 md:hidden dark:bg-emerald-900 dark:text-emerald-300"
                >{{ project.development }}</span
              >
              <p
                class="my-4 text-base font-normal text-white dark:text-gray-400"
              >
                {{ project.description }}
              </p>
              <div
                class="flex flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0"
              >
                <template
                  v-if="
                    project.link_github !== '' &&
                    project.hasOwnProperty('link_github')
                  "
                >
                  <button
                    type="button"
                    class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    @click="redirectTo(project.link_github)"
                  >
                    <font-awesome-icon
                      icon="fa-brands fa-github"
                      class="mr-2 h-4 w-4 fill-current text-black dark:text-white"
                      beat
                      style="--fa-animation-duration: 5s"
                    />
                    GitHub
                  </button>
                </template>
                <template
                  v-if="
                    project.link_website !== '' &&
                    project.hasOwnProperty('link_website')
                  "
                >
                  <button
                    type="button"
                    class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    @click="redirectTo(project.link_website)"
                  >
                    {{ t("projects.viewProject") }}
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
