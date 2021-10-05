<template>
  <div class="container">
    <main class="body-text" id="skip-content">
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

    <section>
      <h3>We're Looking For:</h3>
      <div class="list-1">
        <ul v-for="criteria in criteriaList" :key="criteria">
          <li>{{ criteria }}</li>
        </ul>
      </div>
      <p class="secondary-text">
        For <strong>specific job positions</strong>, visit our
        <a
          href="https://www.linkedin.com/company/6ixplore/about/"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn</a
        >
      </p>
    </section>

    <section>
      <h3>How To Apply</h3>
      <p class="secondary-text">
        Please send a copy of your resume to apply! Do add a short description
        of the
        <strong>experience you'd like to gain</strong>,
        <strong>what you'll provide</strong>, and
        <strong>role you're interested in</strong>!
      </p>
      <p class="secondary-text">
        General Inquiries: general[at]6ixplore.com
      </p>
      <p class="secondary-text">
        Hiring: hiring[at]6ixplore.com
      </p>
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
      &copy; 6ixplore 2021
    </p>
  </div>
</template>

<script>
export default {
  name: "Join",
  metaInfo: {
    title: "Join Us"
  },
  data: () => ({
    criteriaList: [
      "Self-starters",
      "Those who have the ability to adapt to change",
      "Individuals with amazing interpersonal skills!"
    ]
  })
};
</script>

<style scoped>
.container {
  padding: 0 2.5em;
}

.body-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
  text-align: center;
}

h1 {
  padding-bottom: 0.5em;
  font-weight: 600;
  font-size: 1.875em;
}

.secondary-text {
  color: var(--primary-txt);
  font-size: 1em;
  padding-bottom: 2.5em;
  max-width: 55ch;
}

blockquote {
  background: #fff6f6;
  min-width: calc(271 / 16);
  padding: 1.75em 2em;
  border-radius: 0.3125em;
  border-left: var(--primary-clr) 7px solid;
  text-align: center;
}

blockquote > p {
  padding-bottom: 0.5em;
}

blockquote p:nth-last-child(1) {
  padding-top: 1em;
}

h3 {
  margin-top: 8.75em;
  padding-bottom: 2em;
}

.list-1 {
  display: flex;
  flex-direction: column;
  padding: 0 0 2em 1em;
  font-size: 0.85em;
  color: var(--secondary-txt);
}

.credits {
  font-weight: 400;
  font-size: 1em;
  text-align: center;
  padding: 10em 0 4em 0;
  margin: 0 auto;
}
</style>
