<template>
  <div id="app">
    <div class="body">
      <navBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";

export default {
  name: "App",
  metaInfo: {
    title: "6ixplore - Discover locally, instantly",
    titleTemplate: "%s | Discover locally, instantly",
    content:
      "We will help you discover experiences that you’ve missed at places perfectly suited to your mood, palate and pocket..."
  },
  components: {
    navBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/* Global Styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Poppins, Arial, "Open Sans";
  text-decoration: none;
}

/* CSS Variables */
:root {
  /* General */
  --bg-clr: #ffffff;
  /* Brand */
  --primary-clr: #d34141;
  /* Typography */
  --txt-length: 60ch;
  --primary-txt: #1c1c1c;
  --secondary-txt: #484848;
  --accent-txt: #ffffff;
}

.body {
  display: flex;
  flex-direction: column;
}
</style>
