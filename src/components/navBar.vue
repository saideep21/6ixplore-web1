<template>
  <div>
    <nav class="navigation" role="menu">
      <header>
        <router-link :to="{ name: 'Home' }" role="menuitem" aria-current="page">
          <img class="logo" :src="logo" alt="6ixplore" />
        </router-link>
      </header>
      <!-- Accessbility: Skip Navigation on :focus -->
      <router-link to="#skip-content" class="skip-nav">
        <p>Skip navigation</p>
      </router-link>
      <template v-for="link in navLinks">
        <router-link
          class="links"
          role="menuitem"
          :to="{ name: link }"
          :key="link"
          >{{ link }}</router-link
        >
      </template>
      <navModal />
    </nav>
  </div>
</template>

<script>
import navModal from "@/components/navModal.vue";
import webDecorHome from "@/assets/webDecorHome.svg";
import logo from "@/assets/logo.png";

export default {
  data: () => ({
    // Decor
    webDecorHome,
    // Logo
    logo,
    navLinks: ["Home", "About", "Join"]
  }),
  components: {
    navModal
  }
};
</script>

<style scoped>
/* Acessibility: screen-reader only */
.skip-nav {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.skip-nav:focus {
  position: static;
  width: 6em;
  height: 3em;
  text-align: center;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.75em 2.5em 1.75em 2.5em;
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
  width: 5em;
  height: auto;
}

.links {
  display: none;
}

/* Desktop Styling */
@media (min-width: 768px) {
  .navigation {
    box-shadow: none;
  }

  .links {
    display: block;
    color: var(--primary-txt);
  }
}
</style>
