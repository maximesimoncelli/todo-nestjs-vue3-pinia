<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const store = useAuthStore();

const router = useRouter();

const signIn = async () => {
  await axios.post(
    "http://127.0.0.1:3333/auth/signin",
    {
      email: email.value,
      password: password.value,
    },
    {
      withCredentials: true,
    }
  );
  store.loggedIn = true;
  router.push({ name: "Home" });
};
</script>

<template>
  <form class="flex flex-col w-3/12 p-10 rounded-md bg-slate-300">
    <h2 class="self-center mb-5 text-xl text-slate-800">Login</h2>
    <div class="flex flex-col mb-2">
      <label for="email" class="mb-1 text-gray-600">Email</label>
    </div>
    <input
      id="email"
      type="text"
      v-model="email"
      class="p-1 px-5 mb-3 rounded-md outline-slate-400 outline-2"
    />
    <div class="flex flex-col mb-5">
      <label for="email" class="mb-1 text-gray-600">Password</label>
      <input
        id="email"
        type="password"
        v-model="password"
        class="p-1 px-5 rounded-md outline-slate-400 outline-2"
      />
    </div>
    <button
      @click.prevent="signIn"
      class="self-end p-4 py-2 text-white bg-green-600 rounded-md"
    >
      Sign in
    </button>
  </form>
</template>
