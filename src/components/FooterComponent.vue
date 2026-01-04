<template>
  <footer class="p-4 bg-emerald-400 md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <router-link to="/"
        ><a
          class="flex justify-center items-center text-2xl font-semibold text-black dark:text-white"
        >
          Francisco Dueñas
        </a></router-link
      >
      <p class="my-4 text-xl text-gray-800 dark:text-gray-200">
        Website with all information about me.
      </p>
      <p class="my-4 text-md text-gray-800 dark:text-gray-200">
        You can contact with me in:
      </p>
      <ul
        class="flex flex-wrap justify-center items-center text-gray-900 dark:text-white"
      >
        <li class="flex justify-center items-center">
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/leronarenwino/"
            ><font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="w-8 h-8 fill-current text-black dark:text-white mx-2"
          /></a>
        </li>
        <li class="flex justify-center items-center">
          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/LeronArenwino"
            ><font-awesome-icon
              icon="fa-brands fa-square-github"
              class="w-8 h-8 fill-current text-black dark:text-white mx-2"
          /></a>
        </li>
      </ul>
      <p class="text-sm text-gray-900 sm:text-center dark:text-gray-300 py-4">
        2018 - 2026
        <a class="hover:underline"
          ><router-link to="/">Francisco Dueñas</router-link></a
        >.
      </p>
    </div>
  </footer>
</template>
