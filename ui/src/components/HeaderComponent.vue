<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { loggedIn } = storeToRefs(authStore);
</script>

<template>
  <header class="flex justify-between p-4 text-slate-800">
    <h1 class="flex-auto w-10/12 text-3xl uppercase">Bookmarks!</h1>
    <nav class="flex justify-end w-2/12 gap-4 text-xl">
      <div v-if="loggedIn">
        <span class="p-3 py-2 rounded-md hover:bg-slate-300">Todos</span>
        <span class="p-3 py-2 rounded-md hover:bg-slate-300">Logout</span>
      </div>
      <div v-else class="flex gap-2">
        <RouterLink
          class="p-3 py-2 rounded-md hover:bg-slate-300"
          :to="{ name: 'Login' }"
          >Login</RouterLink
        >
        <RouterLink
          class="p-3 py-2 rounded-md hover:bg-slate-300"
          :to="{ name: 'Signup' }"
          >Signup</RouterLink
        >
      </div>
    </nav>
  </header>
</template>
