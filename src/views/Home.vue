<template>
  <div class="container">
    <!-- Hero -->
    <main id="skip-nav" class="hero body-text">
      <div class="content">
        <h1>Discover locally, instantly</h1>
        <p class="secondary-text">
          We will help you discover experiences that you’ve missed at places
          perfectly suited to your mood, palate and pocket.
        </p>
        <!-- Bug -->
        <img class="illustration-person" :src="illustrationPerson" alt />
        <div class="CTA">
          <p>
            <strong>Curious About Our Team?</strong>
          </p>
          <router-link :to="{ name: 'About' }">
            <button>Find Out More</button>
          </router-link>
        </div>
      </div>
    </main>
    <!-- Main Body -->
    <section>
      <h3>An experience led to an idea</h3>
      <p class="secondary-text">
        It all started when a university student began looking for taste
        experiences that matched the pocket.
      </p>
      <p class="story-text">
        What started off as an individual quest to discover the hidden gems of
        Toronto, turned into a mission to create a platform designed to support
        our local businesses. Toronto - the “6ix” - has a wealth of spots that
        serve up food or beverage or cultural or entertainment experiences that
        one would easily overlook and walk past, simply because it was not in
        plain sight or one did not know about it. This little bit of technology
        connects your tastes with an experience that matches your pocket,
        instantly.
      </p>
      <p class="story-text">
        While interacting with several unique independent establishments around
        the city, we learned about their struggles to stay open with soaring
        rent prices and competition from franchises offering cut-price deals. We
        decided to create an equalizer on a platform where local restaurateurs
        can overcome these obstacles and be discovered by foodies that might
        have overlooked them.
      </p>
      <p class="story-text">
        Discover experiences that you’ve missed, and pick places that are
        perfectly suited to your pocket, mood and your taste-buds.
      </p>
    </section>
    <!-- Features component -->
    <Features />
    <!-- Milestones -->
    <section>
      <h3>Milestones</h3>
      <p class="secondary-text">A tour of our progress!</p>
      <h4>Currently Incubating... Stay tuned!</h4>
    </section>
    <p class="credits">
      <img :src="copyrightIcon" alt /> Copyright 6ixplore 2020
    </p>
  </div>
</template>

<script>
import Features from "@/components/Features.vue";
import illustrationPerson from "@/assets/illustrationPerson.svg";
import copyrightIcon from "@/assets/copyrightIcon.svg";

export default {
  name: "Home",
  data: () => ({
    illustrationPerson,
    copyrightIcon
  }),
  components: {
    Features
  }
};
</script>

<style scoped>
.container {
  padding: 0 1.625em 0 1.625em;
}

.body-text {
  margin-top: 10em;
}

.hero {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.eyebrow-text,
.secondary-text {
  color: var(--secondary-txt);
}

.secondary-text {
  font-size: 1em;
  padding-bottom: 2em;
}

h1 {
  font-weight: 400;
  font-size: 1.875em;
  padding-bottom: 0.5em;
}

.paragraph-text,
.illustration-person {
  padding-bottom: 7em;
}

.paragraph-text {
  max-width: var(--txt-length);
  font-size: 0.875em;
}

.illustration-person {
  display: flex;
  max-width: 23vw;
  height: auto;
  margin: 0 auto;
}

.CTA {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5em;
}

.CTA p {
  padding-bottom: 0.75em;
  font-size: 0.94em;
}

button {
  background: var(--primary-clr);
  color: var(--accent-txt);
  font-size: 0.75em;
  border-radius: 100px;
  border: none;
  text-align: left;
  line-height: 1.125em;
  padding: 1em 1.875em 1em 1.875em;
  cursor: pointer;
}

.story-text {
  font-size: 1.2em;
  padding-bottom: 1.5em;
}

h3 {
  margin-top: 8.75em;
}

h4 {
  font-weight: 400;
}

.credits {
  font-weight: 700;
  font-size: 1em;
  text-align: center;
  padding: 40% 0 10% 0;
}

@media (min-width: 768px) {
  .hero {
    display: flex;
  }

  .story-text {
    font-size: 1.5em;
  }

  .illustration-person {
    display: flex;
    margin: 0 auto;
  }

  .CTA {
    display: flex;
    margin-top: 2em;
  }
}
</style>
