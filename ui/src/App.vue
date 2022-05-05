<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />

  <main class="container flex justify-center mx-auto my-5 text-slate-700">
    <RouterView />
  </main>
</template>

<style></style>
