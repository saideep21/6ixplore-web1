<template>
  <div class="container">
    <main id="skip-nav" class="body-text">
      <h1>Join Us</h1>
      <p class="secondary-text">
        Do you want to
        <strong>create a new customer experience</strong> and
        <strong>give back to your community</strong>
        at the same time? Join us to make an impact and enhance your skill-set,
        whether it's in tech, human resources, networking, or user experience
        research,
        <strong>you'll find a place here!</strong>
      </p>
      <blockquote>
        <p>We are ambitious &amp; empathetic.</p>
        <p>We are friendly &amp; committed.</p>
        <p>We are diverse &amp; united.</p>
        <p>We are all about teamwork.</p>
      </blockquote>
    </main>

    <section class="container">
      <h3>We're Looking For:</h3>
      <div class="list-1">
        <ul v-for="item in criteriaList" :key="item">
          <li>{{ item }}</li>
        </ul>
      </div>
      <p class="secondary-text">
        For <strong>specific job positions</strong>, visit our LinkedIn:
      </p>
      <a
        href="https://www.linkedin.com/company/6ixplore/about/"
        target="_blank"
        alt="Open new window"
      >
        <img
          class="linkedin-profile"
          :src="LinkedIn"
          alt="Visit 6ixplore LinkedIn"
        />
      </a>
    </section>

    <section class="container">
      <h3>How To Apply</h3>
      <p class="secondary-text">
        Please send a copy of your resume to apply! Do add a short description
        of the
        <strong>experience you'd like to gain</strong>,
        <strong>what you'll provide</strong>, and
        <strong>role you're interested in</strong>!
      </p>
      <p class="secondary-text">General Address: ---</p>
      <p class="secondary-text">
        <strong>NOTE:</strong> We do not discriminate based on age, gender, sex,
        or any religious or cultural values. We strive to be and have always
        been a team of diverse individuals from various backgrounds, and we
        carry that forward into our hiring process.
      </p>
      <p class="secondary-text">
        Thank you for applying! You’ll hear back from us in a couple days.
      </p>
    </section>
    <p class="credits">
      <img :src="copyrightIcon" alt />
      Copyright 6ixplore 2020
    </p>
  </div>
</template>

<script>
import LinkedIn from "@/assets/LinkedIn.svg";
import copyrightIcon from "@/assets/copyrightIcon.svg";

export default {
  name: "Join",
  data: () => ({
    criteriaList: [
      "Self-starters",
      "Those who have the ability to adapt to change",
      "Individuals with amazing interpersonal skills!"
    ],
    LinkedIn,
    copyrightIcon
  })
};
</script>

<style scoped>
.container {
  padding: 0 3.625em;
}

.body-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
  padding: 0 2em;
  text-align: center;
}

h1 {
  padding-bottom: 0.5em;
  font-weight: 400;
  font-size: 1.875em;
}

.secondary-text {
  color: var(--primary-txt);
  font-size: 1em;
  padding-bottom: 2.5em;
  max-width: 55ch;
}

blockquote {
  background: #ffe8e8;
  padding: 1.75em 1.5625em;
  border-radius: 0.3125em;
  border-left: var(--primary-clr) 8px solid;
  text-align: center;
}

blockquote p:nth-last-child(1) {
  padding-top: 1em;
}

h3 {
  margin-top: 8.75em;
  padding-bottom: 2em;
}

.linkedin-profile {
  width: 2em;
  height: auto;
  margin: -1.5em 0 4em 0;
}

.list-1 {
  display: flex;
  flex-direction: column;
  padding: 0 0 2em 1em;
  font-size: 0.75em;
  color: var(--secondary-txt);
}

.credits {
  font-weight: 700;
  font-size: 1em;
  text-align: center;
  padding: 10em 0 4em 0;
  margin: 0 auto;
}
</style>
