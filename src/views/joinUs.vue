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
    </main>

    <section class="container">
      <h3>We're Looking For:</h3>
      <ol class="padding-bottom">
        <li>Self-starters</li>
        <li>Those who have the ability to adapt to change</li>
        <li>Individuals with amazing interpersonal skills!</li>
      </ol>
    </section>

    <section class="container">
      <h3>How To Apply</h3>
      <p class="padding-bottom">
        Please send a copy of your resume to apply! Do add a short description of the
        <strong>experience you'd like to gain</strong>,
        <strong>what you'll provide</strong>, and
        <strong>role you're interested in</strong>!
      </p>
      <p class="padding-bottom">General Address: ---</p>
      <p class="padding-bottom">
        <strong>NOTE:</strong> We do not discriminate based on age, gender, sex,
        or any religious or cultural values. We strive to be and have always
        been a team of diverse individuals from various backgrounds, and we
        carry that forward into our hiring process. Thank you for applying!
        You’ll hear back from us in a couple days.
      </p>
    </section>
    <p class="credits">
      <img :src="copyrightIcon" alt />
      Copyright 6ixplore 2020
    </p>
  </div>
</template>

<script>
import copyrightIcon from "@/assets/copyrightIcon.svg";

export default {
  name: "Join",
  data: () => ({
    copyrightIcon
  })
};
</script>

<style scoped>
.container {
  padding: 0 1.625em;
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
  font-weight: 400;
  font-size: 1.875em;
  padding-bottom: 0.5em;
}

.secondary-text {
  color: var(--primary-txt);
  font-size: 1em;
  padding-bottom: 5em;
}

.padding-bottom {
  padding-bottom: 3em;
}

.credits {
  font-weight: 700;
  font-size: 1em;
  text-align: center;
  padding: 40% 0 10% 0;
}
</style>
