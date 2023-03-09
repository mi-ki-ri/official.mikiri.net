<script setup>
import { ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const searchQ = ref("");

const onSearch = (ev) => {
  console.log(searchQ.value);
  if (searchQ.value === "") {
    router.push("/");
  } else {
    router.push("/q/" + searchQ.value);
  }
};
</script>

<template>
  <div>
    <header class="min-h-[10vh] bg-base-300 text-base-content p-4">
      <h1 class="text-center">
        <RouterLink class="title link link-hover text-3xl" to="/">
          official.mikiri.net
        </RouterLink>
      </h1>
      <hr class="border w-1/2 mx-auto border-accent border-solid" />
      <nav class="w-1/3 mx-auto m-2">
        <label class="flex justify-center flex-wrap items-baseline">
          Search:
          <input
            type="search"
            v-model="searchQ"
            @keyup.enter="($event) => onSearch($event)"
            class="input m-2 input-secondary input-bordered"
          />
          <button
            @click="($event) => onSearch($event)"
            class="btn glass btn-secondary"
          >
            Go!
          </button>
        </label>
      </nav>
    </header>
    <main class="min-h-[80vh] bg-base-100 container mx-auto text-base-content">
      <transition>
        <keep-alive>
          <RouterView />
        </keep-alive>
      </transition>
    </main>
    <footer
      class="min-h-[10vh] footer footer-center p-4 bg-base-300 text-base-content"
    >
      <div class="w-1/2 mx-auto">
        <div class="flex flex-wrap justify-around items-baseline">
          <RouterLink class="link link-hover" to="/q/x2eofrbfgh"
            >About/Contact</RouterLink
          >
        </div>
        <hr class="border w-1/2 border-accent border-solid" />
        <p>
          Copyright © 2023 - All right reserved by mi.ki.ri.hassha.p@gmail.com
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner&display=swap");
.title {
  font-family: "Edu TAS Beginner", cursive;
}
</style>
