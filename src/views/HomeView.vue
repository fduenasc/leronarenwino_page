<script setup>
import AboutComponent from "../components/home/AboutComponent.vue";
import ProjectsComponent from "../components/home/ProjectsComponent.vue";
import SkillsComponent from "../components/home/SkillsComponent.vue";
</script>

<template>
  <main class="bg-transparent mx-0">
    <AboutComponent></AboutComponent>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="block w-full h-auto" style="display: block; margin: 0; padding: 0;">
      <path
        class="fill-emerald-500 dark:fill-gray-900"
        fill-opacity="1"
        d="M0,192L30,197.3C60,203,120,213,180,181.3C240,149,300,75,360,69.3C420,64,480,128,540,181.3C600,235,660,277,720,272C780,267,840,213,900,176C960,139,1020,117,1080,122.7C1140,128,1200,160,1260,186.7C1320,213,1380,235,1410,245.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      ></path>
    </svg>
    <ProjectsComponent />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="block w-full h-auto" style="display: block; margin: 0; padding: 0; vertical-align: bottom; margin-bottom: -1px;">
      <path
        class="fill-emerald-500 dark:fill-gray-900"
        fill-opacity="1"
        d="M0,192L30,197.3C60,203,120,213,180,181.3C240,149,300,75,360,69.3C420,64,480,128,540,181.3C600,235,660,277,720,272C780,267,840,213,900,176C960,139,1020,117,1080,122.7C1140,128,1200,160,1260,186.7C1320,213,1380,235,1410,245.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
    <SkillsComponent />
  </main>
</template>
