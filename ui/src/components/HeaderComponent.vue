<script setup lang="ts">
const isLoggedIn = false;
</script>

<template>
  <header class="flex justify-between p-4 text-white bg-slate-800">
    <h1 class="flex-auto w-10/12">TodoApp</h1>
    <nav class="flex justify-end w-2/12 gap-4">
      <div v-if="isLoggedIn">
        <span>Todos</span>
        <span>Logout</span>
      </div>
      <span v-else>Login</span>
    </nav>
  </header>
</template>
