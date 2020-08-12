<template>
  <div class="container">
    <nav class="navigation container">
      <header>
        <router-link :to="{ name: 'Home' }">
          <img
            class="logo"
            :src="logo"
            alt="6ixplore - Discover locally, instantly"
          />
        </router-link>
      </header>
      <!-- Add accessiblity: Skip Nav :focus -->
      <template v-for="link in navLinks">
        <router-link :to="{ name: link }" :key="link">{{ link }}</router-link>
      </template>
      <navModal />
    </nav>
    <!-- <img class="decor-home" :src="webDecorHome" alt /> -->
    <!-- Add accessiblity: Skip To Content -->
  </div>
</template>

<script>
import navModal from "@/components/navModal.vue";
import webDecorHome from "@/assets/webDecorHome.svg";
import logo from "@/assets/logo.svg";

export default {
  data: () => ({
    // Decor
    webDecorHome,
    // Logo
    logo,
    navLinks: ["Home", "About", "Join"],
    browserBreakPoint: `${768}px`
  }),
  components: {
    navModal
  }
};
</script>

<style scoped>
.container {
  padding: 0 1.625em;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.75em 1.625em 1.75em 1.625em;
  width: 100vw;
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  height: 10%;
  background: #ffffff;
  box-shadow: 5px 5px 20px #96969629;
}

.logo {
  width: 6.1875em;
  height: auto;
}

/* DECOR IMG
.decor-home {
  position: absolute;
  z-index: -1;
  left: 0px;
  top: 0px;
  width: 80px;
  height: auto;
/* transform: matrix(-0.48, 0.87, -0.87, -0.48, 0, 0); */

/* Desktop Styling */
@media (min-width: 768px) {
  .navigation {
    opacity: 1;
  }
}
</style>
