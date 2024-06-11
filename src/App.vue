<script setup lang="ts">
import { ref } from "vue";
import HeroComponent from "./components/HeroComponent.vue";
import Team from "./components/Team.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import Posts from "./components/Posts.vue";
import Uses from "./components/Uses.vue";
import coming_soon from "./components/coming_soon.vue";

</script>

<template>

  <head>
    <title>HTML Elements Reference</title>
  </head>
  <HeroComponent />
  <Uses />
  <Team />
  <!-- <Posts /> -->
  <Contact />
  <Footer />
</template>

<style scoped></style>
