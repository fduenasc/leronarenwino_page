import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

const STORAGE_KEY = "locale";
const SUPPORTED = new Set(["en", "es"]);

function detectLocale() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.has(stored)) return stored;

  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return browser === "es" ? "es" : "en";
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: "en",
  messages: { en, es },
});

export function setLocale(locale) {
  if (!SUPPORTED.has(locale)) return;

  i18n.global.locale.value = locale;
  localStorage.setItem(STORAGE_KEY, locale);
  document.documentElement.lang = locale;
  applyDocumentMeta();
}

export function applyDocumentMeta() {
  const t = i18n.global.t;
  document.title = t("meta.title");

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t("meta.description"));

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", t("meta.description"));
}

export function initLocale() {
  document.documentElement.lang = i18n.global.locale.value;
  applyDocumentMeta();
}
