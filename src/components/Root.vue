<script setup lang="ts">
import { ref } from "vue";
import HeroComponent from "./HeroComponent.vue";
import Team from "./Team.vue";
import Footer from "./Footer.vue";
import Contact from "./Contact.vue";
import Posts from "./Posts.vue";
import Uses from "./Uses.vue";

</script>

<template>
  <HeroComponent />
  <Uses />
  <Team />
  <!-- <Posts /> -->
  <Contact />
  <Footer />
</template>

<style scoped></style>