<template>
  <div>
    <!-- navModal (only in mobile) -->
    <div class="nav-menu" role="navigation">
      <!-- Menu burger -->
      <button @click="toggleModal">
        <img
          class="nav-burger"
          :src="isOpen ? closeIcon : burgerIcon"
          :alt="isOpen ? 'Close Navigation' : 'Open Navigation'"
        />
      </button>
      <!-- Menu modal -->
      <div v-show="isOpen" class="nav-modal">
        <template
          v-for="link in navLinks"
          :class="currentLink(link)"
          @click="selectedLink = link"
        >
          <router-link :to="{ name: link }" role="menuitem" :key="link">{{
            link
          }}</router-link>
        </template>
      </div>
      <div v-if="isOpen" class="overlay" @click="toggleModal"></div>
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
    isOpen: false,
    selectedLink: null
  }),
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    currentLink(link) {
      return `nav-modal ${
        link == this.selectedLink ? "nav-modal-selected" : null
      }`;
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

.nav-item {
  border-bottom: 0.3rem solid var(--primary-clr);
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

.nav-modal-selected {
  border-bottom: 0.3rem solid var(--primary-clr);
}

.nav-modal button {
  margin-bottom: 1.5em;
}

.overlay {
  background-color: rgb(255, 255, 255, 255, 0%);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

@media screen and (min-width: 768px) {
  .nav-menu {
    opacity: 0;
  }
}
</style>
