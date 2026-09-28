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
        Systems &amp; Computer Engineer · Associate Consultant at Red Hat
      </p>
      <p
        class="mb-6 text-lg text-black lg:text-xl sm:px-12 xl:px-32 dark:text-gray-400"
      >
        Cloud-native &amp; backend developer from the
        <strong>Universidad Nacional de Colombia</strong>, with over four years
        building scalable systems using
        <strong>Java, Quarkus, and Spring</strong>. I design
        <strong>microservices and reactive architectures</strong> on
        <strong>AWS, Azure, Kubernetes, and OpenShift</strong>, with a strong
        focus on clean architecture and production reliability.
      </p>
      <p
        class="mb-4 text-base font-medium text-gray-800 lg:text-lg dark:text-gray-300"
      >
        Core knowledge
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
      <p
        class="mb-4 text-base font-medium text-gray-800 lg:text-lg dark:text-gray-300"
      >
        Certifications
      </p>
      <ul
        class="mb-8 space-y-2 text-left text-base text-black sm:mx-auto sm:max-w-xl dark:text-gray-300"
      >
        <li
          v-for="cert in certifications"
          :key="cert"
          class="flex items-start gap-2"
        >
          <span
            class="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400"
            aria-hidden="true"
          />
          <span>{{ cert }}</span>
        </li>
      </ul>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          class="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-800"
          @click="scrollToSection('projects')"
        >
          View projects
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          @click="scrollToSection('skills')"
        >
          Skills
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { scrollToSection } from "@/utils/scrollToSection.js";

const knowledge = [
  "Java",
  "Quarkus",
  "Spring",
  "Microservices",
  "Reactive systems",
  "Kubernetes",
  "OpenShift",
  "AWS",
  "Azure",
  "Docker",
  "Python",
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Red Hat Certified Developer in Cloud-native Applications",
  "Red Hat Certified Specialist in Cloud-native Integration",
];
</script>
