<template>
  <header class="sticky top-0 z-50 border-b border-emerald-400/40 dark:border-gray-700">
    <nav
      class="bg-emerald-300/95 px-4 py-3 backdrop-blur-sm dark:bg-gray-800/95 lg:px-6"
      :aria-label="t('nav.primary')"
    >
      <div
        class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-3"
      >
        <router-link
          to="/"
          class="min-w-0 rounded-md px-1 py-0.5 text-left transition-colors"
          :class="
            isHome && activeSection === 'about'
              ? 'text-emerald-900 dark:text-emerald-300'
              : 'text-black hover:opacity-80 dark:text-white'
          "
          :aria-current="isHome && activeSection === 'about' ? 'location' : undefined"
          @click="goToTop"
        >
          <span class="block truncate text-sm font-semibold leading-tight sm:text-base">
            Francisco Dueñas
          </span>
          <span
            class="hidden truncate text-xs text-emerald-900/80 sm:block dark:text-gray-400"
          >
            {{ t("nav.tagline") }}
          </span>
        </router-link>

        <div class="flex items-center gap-2">
          <div
            class="inline-flex overflow-hidden rounded-lg border border-emerald-400/50 dark:border-gray-600"
            role="group"
            :aria-label="t('nav.lang')"
          >
            <button
              type="button"
              class="px-2.5 py-1.5 text-xs font-semibold transition-colors"
              :class="
                locale === 'en'
                  ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                  : 'bg-transparent text-black hover:bg-emerald-200 dark:text-white dark:hover:bg-gray-700'
              "
              :aria-pressed="locale === 'en'"
              @click="changeLocale('en')"
            >
              EN
            </button>
            <button
              type="button"
              class="px-2.5 py-1.5 text-xs font-semibold transition-colors"
              :class="
                locale === 'es'
                  ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                  : 'bg-transparent text-black hover:bg-emerald-200 dark:text-white dark:hover:bg-gray-700'
              "
              :aria-pressed="locale === 'es'"
              @click="changeLocale('es')"
            >
              ES
            </button>
          </div>

          <button
            id="theme-toggle"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-black hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500"
            :aria-label="isDarkTheme ? t('nav.themeLight') : t('nav.themeDark')"
            @click="toggleTheme"
          >
            <font-awesome-icon
              :icon="isDarkTheme ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
              class="h-4 w-4"
            />
          </button>

          <button
            v-if="isHome"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-black hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 lg:hidden dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500"
            :aria-expanded="menuOpen"
            aria-controls="site-sections"
            :aria-label="t('nav.menu')"
            @click="menuOpen = !menuOpen"
          >
            <font-awesome-icon
              :icon="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
              class="h-4 w-4"
            />
          </button>
        </div>

        <div
          v-show="isHome"
          id="site-sections"
          class="w-full lg:flex lg:w-auto lg:items-center"
          :class="menuOpen ? 'block' : 'hidden lg:block'"
        >
          <p
            class="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-emerald-900/70 lg:hidden dark:text-gray-400"
          >
            {{ t("nav.jumpTo") }}
          </p>
          <ul
            class="flex flex-col gap-1 rounded-lg bg-emerald-200/70 p-2 lg:flex-row lg:items-center lg:gap-1 lg:bg-transparent lg:p-0 dark:bg-gray-700/80 lg:dark:bg-transparent"
          >
            <li v-for="section in sections" :key="section.id">
              <button
                type="button"
                class="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors lg:justify-center lg:px-3 lg:py-2"
                :class="
                  activeSection === section.id
                    ? 'bg-emerald-600 text-white shadow-sm dark:bg-emerald-500'
                    : 'text-gray-800 hover:bg-emerald-100 dark:text-gray-200 dark:hover:bg-gray-600'
                "
                :aria-current="activeSection === section.id ? 'location' : undefined"
                @click="goToSection(section.id)"
              >
                <span>{{ t(`nav.sections.${section.id}`) }}</span>
                <span class="text-xs font-normal opacity-70 lg:hidden">
                  {{ t(`nav.sections.${section.id}Hint`) }}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { setLocale } from "@/i18n";
import { scrollToSection } from "@/utils/scrollToSection.js";

const { t, locale } = useI18n();

const sections = [
  { id: "projects" },
  { id: "certifications" },
  { id: "skills" },
];

const observedSectionIds = ["about", "projects", "certifications", "skills"];

const route = useRoute();
const menuOpen = ref(false);
const activeSection = ref("about");
const isDarkTheme = ref(
  localStorage.getItem("color-theme") === "dark" ||
    (!localStorage.getItem("color-theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

const isHome = computed(() => route.path === "/" || route.path === "/home");

let observer;

function changeLocale(next) {
  setLocale(next);
}

function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value;
  document.documentElement.classList.toggle("dark", isDarkTheme.value);
  localStorage.setItem("color-theme", isDarkTheme.value ? "dark" : "light");
}

function goToSection(id) {
  menuOpen.value = false;
  scrollToSection(id);
  activeSection.value = id;
}

function goToTop(event) {
  menuOpen.value = false;
  if (!isHome.value) return;

  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  activeSection.value = "about";
}

async function setupSectionObserver() {
  observer?.disconnect();

  if (!isHome.value || typeof IntersectionObserver === "undefined") return;

  await nextTick();

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]?.target?.id) {
        activeSection.value = visible[0].target.id;
      }
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.15, 0.35, 0.55],
    }
  );

  observedSectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

watch(
  () => route.path,
  () => {
    menuOpen.value = false;
    setupSectionObserver();
  }
);

onMounted(() => {
  document.documentElement.classList.toggle("dark", isDarkTheme.value);
  setupSectionObserver();
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
