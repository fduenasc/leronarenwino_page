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
          {{ t("certifications.title") }}
        </h2>
        <p class="mb-5 font-light text-black sm:text-xl dark:text-gray-400">
          {{ t("certifications.subtitle") }}
        </p>
        <a
          href="https://www.credly.com/users/francisco-duenas.49d3982c/badges/credly"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <font-awesome-icon icon="fa-solid fa-award" class="mr-2 h-4 w-4" />
          {{ t("certifications.viewAll") }}
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            class="ml-2 h-3 w-3"
          />
        </a>
      </div>

      <ul
        class="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        :aria-label="t('certifications.listLabel')"
      >
        <li v-for="cert in certifications" :key="cert.id">
          <a
            :href="cert.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-full flex-col items-center rounded-xl border border-white/20 bg-white p-5 text-center shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-600"
          >
            <img
              :src="cert.image"
              :alt="t('certifications.badgeAlt', { name: cert.name })"
              width="140"
              height="140"
              loading="lazy"
              decoding="async"
              class="mb-4 h-36 w-36 object-contain"
            />
            <span
              class="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300"
            >
              {{ cert.issuer }}
            </span>
            <span
              class="mb-3 grow text-sm font-semibold leading-snug text-gray-900 dark:text-white"
            >
              {{ cert.name }}
            </span>
            <span
              class="inline-flex items-center text-xs font-medium text-emerald-800 dark:text-emerald-300"
            >
              {{ t("certifications.verify") }}
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="ml-1.5 h-3 w-3"
              />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const certifications = [
  {
    id: "5c178799-4411-4bac-b0e6-dd8b4b1f38ca",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image:
      "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    url: "https://www.credly.com/badges/5c178799-4411-4bac-b0e6-dd8b4b1f38ca",
  },
  {
    id: "db741da6-938b-40b9-861f-7504b0a79693",
    name: "Red Hat Certified Developer in Cloud-native Applications",
    issuer: "Red Hat",
    image:
      "https://images.credly.com/images/3101e76a-194b-491f-9e68-ce33ed7119e2/blob",
    url: "https://www.credly.com/badges/db741da6-938b-40b9-861f-7504b0a79693",
  },
  {
    id: "c24d00b3-5eee-4ced-8347-afcaf0110b70",
    name: "Red Hat Certified Specialist in Cloud-native Development",
    issuer: "Red Hat",
    image:
      "https://images.credly.com/images/392aac63-439d-46c3-a104-70e3d63f8c5b/blob",
    url: "https://www.credly.com/badges/c24d00b3-5eee-4ced-8347-afcaf0110b70",
  },
  {
    id: "196493bf-1c8f-40dc-8f70-739bf25a45aa",
    name: "Red Hat Certified Specialist in Cloud-native Integration",
    issuer: "Red Hat",
    image:
      "https://images.credly.com/images/f57fc598-01c7-4788-95cf-b9c24bcf2fc3/image.png",
    url: "https://www.credly.com/badges/196493bf-1c8f-40dc-8f70-739bf25a45aa",
  },
];
</script>
