<template>
  <footer class="bg-emerald-400 p-4 md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <router-link
        to="/"
        class="flex items-center justify-center text-2xl font-semibold text-black dark:text-white"
      >
        Francisco Dueñas
      </router-link>
      <p class="my-4 text-xl text-gray-800 dark:text-gray-200">
        Cloud-native &amp; backend developer · Red Hat Associate Consultant.
      </p>
      <p class="text-md my-4 text-gray-800 dark:text-gray-200">Get in touch:</p>
      <ul
        class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white"
      >
        <li
          v-for="link in socialLinks"
          :key="link.id"
          class="flex items-center justify-center"
        >
          <a
            :id="`${link.id}-trigger`"
            :href="link.href"
            :aria-label="link.label"
            :data-tooltip-target="`${link.id}-tooltip`"
            data-tooltip-placement="top"
            rel="noopener noreferrer"
            target="_blank"
            class="inline-flex"
          >
            <font-awesome-icon
              :icon="link.icon"
              class="mx-2 h-8 w-8 fill-current text-black dark:text-white"
            />
          </a>
          <div
            :id="`${link.id}-tooltip`"
            role="tooltip"
            class="invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            {{ link.label }}
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
      </ul>
      <p class="py-4 text-sm text-gray-900 sm:text-center dark:text-gray-300">
        2018 – 2026
        <router-link to="/" class="hover:underline">Francisco Dueñas</router-link
        >.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";
import Tooltip from "flowbite/src/components/tooltip.js";

const socialLinks = [
  {
    id: "footer-linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fduenasc/",
    icon: "fa-brands fa-linkedin",
  },
  {
    id: "footer-github",
    label: "GitHub",
    href: "https://github.com/fduenasc",
    icon: "fa-brands fa-square-github",
  },
];

onMounted(() => {
  socialLinks.forEach((link) => {
    const triggerEl = document.getElementById(`${link.id}-trigger`);
    const targetEl = document.getElementById(`${link.id}-tooltip`);
    if (triggerEl && targetEl) {
      new Tooltip(targetEl, triggerEl, {
        placement: "top",
        triggerType: "hover",
      });
    }
  });
});
</script>
