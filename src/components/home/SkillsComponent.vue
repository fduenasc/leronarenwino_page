<script setup>
import { useDataStore } from "@/stores/index.js";

const store = useDataStore();
</script>

<template>
  <section id="skills" class="bg-emerald-500 dark:bg-gray-900 py-16">
    <div class="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
        <h1
          class="my-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          <span
            class="text-transparent font-medium bg-clip-text bg-black dark:bg-white"
            >Skills</span
          >
        </h1>
        <p class="mb-5 font-light text-black sm:text-xl dark:text-gray-400">
          Technologies and tools I work with
        </p>
      </div>
      
      <!-- Skills Categories -->
      <div class="space-y-12">
        <template v-for="skill of store.skills" :key="skill.id">
          <div class="w-full">
            <!-- Category Title -->
            <div class="text-center mb-6">
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
                {{ skill.name }} {{ skill.emoji }}
              </h2>
            </div>
            
            <!-- Responsive Skills Row: Flex wrap on mobile, Horizontal scroll on desktop -->
            <div class="relative flex justify-center items-center w-full">
              <!-- Mobile: Flex wrap (centered, stacks vertically) -->
              <div
                class="flex flex-wrap justify-center gap-4 lg:hidden max-w-full"
              >
                <template v-for="(img, index) of skill.dataImg" :key="index">
                  <div
                    class="flex flex-col items-center justify-center px-4 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 group min-w-[100px] sm:min-w-[120px]"
                  >
                    <font-awesome-icon
                      :icon="img"
                      class="w-8 h-8 sm:w-10 sm:h-10 mb-2 fill-current text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300"
                    />
                    <p
                      class="text-xs sm:text-sm font-medium text-center text-gray-900 dark:text-white"
                    >
                      {{ skill.dataName[index] }}
                    </p>
                  </div>
                </template>
              </div>
              
              <!-- Desktop: Horizontal scrolling (centered) -->
              <div
                class="hidden lg:flex gap-8 overflow-x-auto pb-4 scrollbar-hide justify-center items-center w-full"
                style="scrollbar-width: none; -ms-overflow-style: none;"
              >
                <template v-for="(img, index) of skill.dataImg" :key="index">
                  <div
                    class="flex flex-col items-center justify-center min-w-[120px] px-6 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 group flex-shrink-0"
                  >
                    <font-awesome-icon
                      :icon="img"
                      class="w-10 h-10 mb-3 fill-current text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300"
                    />
                    <p
                      class="text-sm font-medium text-center text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {{ skill.dataName[index] }}
                    </p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>