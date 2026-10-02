<template>
  <section
    id="about"
    aria-labelledby="about-heading"
    class="grid min-h-screen place-content-center gap-4 bg-emerald-500 px-4 py-8 text-center dark:bg-gray-900 lg:px-36"
  >
    <div
      class="w-full rounded-lg border border-gray-200 bg-white p-4 text-center shadow-2xl sm:p-8 dark:border-gray-700 dark:bg-gray-800"
    >
      <h1
        id="about-heading"
        class="my-4 text-4xl font-medium text-black md:text-6xl lg:text-8xl dark:text-white"
      >
        Francisco Dueñas
      </h1>
      <p
        class="mb-4 text-lg font-medium text-emerald-800 lg:text-2xl dark:text-emerald-300"
      >
        {{ t("about.role") }}
      </p>
      <p
        class="mb-6 text-lg text-black lg:text-xl sm:px-12 xl:px-32 dark:text-gray-400"
        v-html="t('about.bio')"
      />
      <p
        class="mb-4 text-base font-medium text-gray-800 lg:text-lg dark:text-gray-300"
      >
        {{ t("about.knowledgeTitle") }}
      </p>
      <ul
        class="mb-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-700 sm:px-8 dark:text-gray-300"
      >
        <li
          v-for="item in knowledge"
          :key="item"
          class="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700"
        >
          {{ item }}
        </li>
      </ul>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          class="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-800"
          @click="scrollToSection('projects')"
        >
          {{ t("about.ctaProjects") }}
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          @click="scrollToSection('certifications')"
        >
          {{ t("about.ctaCertifications") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { scrollToSection } from "@/utils/scrollToSection.js";

const { t } = useI18n();

const knowledge = computed(() => [
  "Java",
  "Quarkus",
  "Spring",
  t("about.knowledge.microservices"),
  t("about.knowledge.reactive"),
  "Kubernetes",
  "OpenShift",
  "AWS",
  "Azure",
  "Docker",
  "Python",
]);
</script>
