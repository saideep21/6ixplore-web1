<template>
  <div class="container">
    <!-- Hero -->
    <img class="decor-home" :src="webDecorHome" alt="" aria-hidden="true" />
    <main class="hero" id="skip-content">
      <div class="content">
        <h1>Discover locally, instantly</h1>
        <p class="secondary-text">
          We help you discover experiences that you’ve missed at places
          perfectly suited to your mood, palate and pocket.
        </p>
        <img
          class="illustration-person"
          :src="illustrationPerson"
          alt=""
          width="200"
          height="200"
          aria-hidden="true"
        />
        <!-- CTA to /about -->
        <div class="CTA">
          <p>
            <strong>We're launching soon!</strong>
          </p>
          <a
            href="https://d4nntuql8ym.typeform.com/to/zA0sIL1d"
            class="button"
            target="_blank"
            rel="noopener noreferrer"
            alt="Open Typeform in new tab"
          >
            Join our exclusive waitlist!
          </a>
        </div>
      </div>
    </main>
    <!-- Embed Demo -->
    <h3>Our App Prototype</h3>
    <p class="secondary-text">
      Our prototype is constantly being improved so please be patient! Not
      loading?
      <a
        href="https://xd.adobe.com/view/46868c8a-ee0c-448c-a868-ead06fab9711-13d5/?fullscreen&hints=off"
        target="_blank"
        rel="noopener noreferrer"
        >View the prototype</a
      >
    </p>
    <section class="embed-container">
      <iframe
        width="1035"
        height="1012"
        src="https://xd.adobe.com/embed/46868c8a-ee0c-448c-a868-ead06fab9711-13d5/?fullscreen&hints=off"
        frameborder="0"
        allowfullscreen
        title="Adobe Xd embedded prototype"
      >
      </iframe>
    </section>
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
        perfectly suited to your pocket, mood and taste-buds.
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
      &copy; 6ixplore 2021
    </p>
  </div>
</template>

<script>
import webDecorHome from "@/assets/webDecorHome.svg";
import Features from "@/components/Features.vue";
import illustrationPerson from "@/assets/illustrationPerson.svg";

export default {
  name: "Home",
  metaInfo: {
    title: "6ixplore - Discover locally, instantly",
    titleTemplate: null
  },
  data: () => ({
    webDecorHome,
    illustrationPerson
  }),
  components: {
    Features
  }
};
</script>

<style scoped>
.container {
  padding: 0 2.5em;
}

.hero,
.content {
  display: flex;
  flex-direction: column;
}

.hero {
  text-align: left;
  margin-top: 9em;
}

.decor-home {
  position: absolute;
  top: -3em;
  right: -2em;
  z-index: -1;
  width: 38em;
  height: auto;
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
  padding-bottom: 0.5em;
  font-weight: 600;
  font-size: 1.875em;
}

.content {
  justify-content: center;
}

.illustration-person {
  margin: 0 auto;
  max-width: 11em;
  height: auto;
}

.CTA {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5em;
  padding-top: 4em;
}

.CTA p {
  padding-bottom: 0.75em;
  font-size: 0.94em;
}

.button {
  background: var(--primary-clr);
  padding: 1.25em 2em;
  font-size: 0.8em;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  text-align: left;
  line-height: 1.125em;
  color: var(--accent-txt);
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  /* background: lightblue; */
  /* overflow: hidden; */
}

.embed-container iframe {
  position: absolute;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 100%;
  /* background: lightpink; */
}

.story-text,
.secondary-text {
  max-width: 55ch;
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
  font-weight: 400;
  font-size: 1em;
  text-align: center;
  padding: 10em 0 4em 0;
}

/* Mobile < 667px (iPhone 6/7/8) */
@media screen and (max-width: 470px) {
  .illustration-person {
    visibility: hidden;
    max-width: 3em;
  }

  .CTA {
    padding-top: 1em;
  }
}

/* Desktop */
@media screen and (min-width: 980px) {
  .container {
    padding: 0 2.5em;
  }

  .hero {
    margin-top: 10em;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .decor-home {
    top: -4em;
    right: 6em;
  }

  .illustration-person {
    display: inline;
    max-width: 16em;
    margin: -8em 9% auto auto;
    visibility: visible;
  }

  .CTA {
    align-items: flex-start;
    margin-top: -9em;
  }
}
</style>
