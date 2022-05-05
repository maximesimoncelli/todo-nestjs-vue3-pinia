import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    logIn() {
      this.loggedIn = true;
    },
  },
});
