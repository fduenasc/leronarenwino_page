<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useDataStore } from "@/stores/index.js";

const store = useDataStore();

onMounted(() => {
  store.getProjects();
  store.getSkills();
});
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>
