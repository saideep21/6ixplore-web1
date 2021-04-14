<template>
  <div>
    <!-- navModal (only in mobile) -->
    <div class="nav-menu" role="navigation">
      <!-- Menu burger -->
      <button
        @click="toggleModal"
        type="button"
        :aria-label="isOpen ? 'Close Dialog' : 'Open Dialog'"
      >
        <img class="nav-burger" :src="isOpen ? closeIcon : burgerIcon" alt="" />
      </button>
      <!-- Menu modal -->
      <div
        v-show="isOpen"
        class="nav-modal"
        role="dialog"
        aria-labelledby="dialog-title"
      >
        <h1 id="dialog-title" class="sr-only">Mobile Site Navigation</h1>
        <template v-for="link in navLinks">
          <router-link class="links" :to="{ name: link }" :key="link"
            >{{ link }}
          </router-link>
        </template>
      </div>
      <!-- Menu overlay -->
      <div
        v-show="isOpen"
        class="overlay"
        @click="toggleModal"
        tabindex="-1"
      ></div>
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
  },
  computed: {}
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

.links {
  color: var(--primary-txt);
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

.overlay {
  background-color: rgb(255, 255, 255, 255, 0%);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

/* Accessiblity - screen readers */
.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
/*  */

@media screen and (min-width: 768px) {
  .nav-menu {
    opacity: 0;
  }

  .links {
    color: var(--primary-txt);
  }
}
</style>
