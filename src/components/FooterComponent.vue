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
        <li class="flex items-center justify-center">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/fduenasc/"
            aria-label="LinkedIn"
          >
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="mx-2 h-8 w-8 fill-current text-black dark:text-white"
            />
          </a>
        </li>
        <li class="flex items-center justify-center">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.credly.com/users/francisco-duenas.49d3982c/badges/credly"
            aria-label="Credly badges"
          >
            <font-awesome-icon
              icon="fa-solid fa-award"
              class="mx-2 h-8 w-8 fill-current text-black dark:text-white"
            />
          </a>
        </li>
        <li class="flex items-center justify-center">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/fduenasc"
            aria-label="GitHub"
          >
            <font-awesome-icon
              icon="fa-brands fa-square-github"
              class="mx-2 h-8 w-8 fill-current text-black dark:text-white"
            />
          </a>
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
