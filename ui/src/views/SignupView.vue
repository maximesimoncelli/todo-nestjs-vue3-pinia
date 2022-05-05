<script setup lang="ts">
import { ref } from "@vue/reactivity";
import axios from "axios";

const email = ref("");
const password = ref("");
let apiReturn = ref("");
const signUp = async () => {
  const response = await axios.post(
    "http://127.0.0.1:3333/auth/signup",
    {
      email: email.value,
      password: password.value,
    },
    { withCredentials: true, credentials: "include" }
  );
  apiReturn.value = response.data;
};
</script>

<template>
  <form class="flex flex-col w-3/12 p-10 rounded-md bg-slate-300">
    {{ apiReturn }}
    <h2 class="self-center mb-5 text-xl text-slate-800">Signup</h2>
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
      @click.prevent="signUp"
      class="self-end p-4 py-2 text-white bg-green-600 rounded-md"
    >
      Signup
    </button>
  </form>
</template>
