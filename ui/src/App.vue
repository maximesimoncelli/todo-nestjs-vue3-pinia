<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="flex justify-between p-4 text-white bg-slate-800">
    <h1 class="flex-auto w-10/12">TodoApp</h1>
    <nav class="flex justify-end w-2/12 gap-4">
      <span>Login</span>
      <span>Logout</span>
      <span>Todos</span>
    </nav>
  </header>

  <RouterView />
</template>

<style></style>
