<template>
  <div>
    <!-- navModal (Mobile) -->
    <div class="nav-menu">
      <!-- burger -->
      <button @click="toggleModal">
        <img
          class="nav-burger"
          :src="isOpen ? closeIcon : burgerIcon"
          :alt="isOpen ? 'Close Navigation' : 'Open Navigation'"
          role="navigation"
        />
      </button>
      <div v-if="isOpen" class="nav-modal">
        <template v-for="link in navLinks">
          <router-link :to="{ name: link }" :key="link">{{ link }}</router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import burgerIcon from "@/assets/burgerIcon.svg";
import closeIcon from "@/assets/closeIcon.svg";

export default {
  data: () => ({
    // Navigation Links
    navLinks: ["Home", "About", "Join"],
    burgerIcon,
    closeIcon,
    isOpen: false
  }),
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  background: none;
}

/* Nav Burger */
.nav-menu,
.nav-modal {
  display: flex;
}

.nav-burger {
  opacity: 1;
  cursor: pointer;
}

/* Nav Modal */
.nav-modal {
  position: absolute;
  z-index: 99;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  opacity: 1;
  padding: 0.5em 2em;
  width: 14em;
  height: 11em;
  top: 5.5em;
  right: 1.625em;
  border-radius: 1.25em;
  background: var(--bg-clr);
  box-shadow: 5px 5px 20px #633a3a29;
}
.nav-modal button {
  margin-bottom: 1.5em;
}

@media screen and (min-width: 768px) {
  .nav-menu {
    opacity: 0;
  }
}
</style>
