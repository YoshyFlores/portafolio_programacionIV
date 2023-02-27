<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../src/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <header id="header" class="fixed-top">
    <Navbar
      id="navbar"
      class="navbar order-last order-lg-0"
      brandName="Portafolio"
    />
  </header>
  <RouterView />
</template>
