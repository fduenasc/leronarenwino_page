<template>
  <section
    id="certifications"
    aria-labelledby="certifications-heading"
    class="bg-emerald-500 py-16 dark:bg-gray-900"
  >
    <div class="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
      <div class="mx-auto mb-12 max-w-screen-md text-center lg:mb-16">
        <h2
          id="certifications-heading"
          class="my-4 text-4xl font-medium leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Certifications
        </h2>
        <p class="mb-5 font-light text-black sm:text-xl dark:text-gray-400">
          Verified credentials on AWS and Red Hat, issued via Credly.
        </p>
        <a
          href="https://www.credly.com/users/francisco-duenas.49d3982c/badges/credly"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <font-awesome-icon icon="fa-solid fa-award" class="mr-2 h-4 w-4" />
          View all on Credly
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            class="ml-2 h-3 w-3"
          />
        </a>
      </div>

      <div
        class="flex flex-wrap items-start justify-center gap-4 sm:gap-6"
        aria-label="Credly certification badges"
      >
        <div
          v-for="badgeId in credlyBadges"
          :key="badgeId"
          class="flex justify-center"
          data-iframe-width="150"
          data-iframe-height="270"
          :data-share-badge-id="badgeId"
          data-share-badge-host="https://www.credly.com"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const credlyBadges = [
  "5c178799-4411-4bac-b0e6-dd8b4b1f38ca",
  "db741da6-938b-40b9-861f-7504b0a79693",
  "c24d00b3-5eee-4ced-8347-afcaf0110b70",
  "196493bf-1c8f-40dc-8f70-739bf25a45aa",
];

const CREDLY_EMBED_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

function loadCredlyEmbed() {
  if (document.querySelector(`script[src="${CREDLY_EMBED_SRC}"]`)) return;

  const script = document.createElement("script");
  script.src = CREDLY_EMBED_SRC;
  script.async = true;
  document.body.appendChild(script);
}

onMounted(() => {
  loadCredlyEmbed();
});
</script>
