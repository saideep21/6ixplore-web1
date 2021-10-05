<template>
  <div class="container">
    <img
      class="decor-about"
      :src="webDecorAbout"
      width="800"
      height="800"
      aria-hidden="true"
      alt=""
    />
    <main class="body-text" id="skip-content">
      <h1>About Us</h1>
      <p class="secondary-text">
        We are a team full of dynamic individuals determined to make a positive
        impact for our local restaurants.
      </p>
    </main>
    <!-- Meet Team -->
    <section>
      <h3>Meet Our Team</h3>
      <div class="gallery">
        <div class="member">
          <div class="info">
            <img class="headshot" :src="sai2x" alt />
            <div class="name-and-title">
              <h4>Saideep Kumar</h4>
              <p class="title">Founder and CEO</p>
            </div>
          </div>
          <p>
            Saideep is a budding student entrepreneur who is taking his venture
            live in 2020. He has nurtured his idea for over 2 and a half years
            since when he came to the beautiful city of Toronto from India. The
            team, assembled from scratch, has readied the delivery platform for
            launch. Equal importance is given to team chemistry and to team
            productivity. The values of empathy and diversity are as dear to
            Saideep as are his ambition and commitment.
          </p>
        </div>

        <div class="member">
          <div class="info">
            <img class="headshot" :src="maureen2x" alt />
            <div class="name-and-title">
              <h4>Maureen T'o</h4>
              <p class="title">UI/UX Designer</p>
            </div>
          </div>
          <p>
            A lifelong learner at heart, Maureen is a B.Kin graduate by day, and
            front-end developer and UI/UX designer by night. From her degree,
            she uses her soft-skills, ethical considerations, and understanding
            of the way people learn to enhance digital experiences. She is
            interested in digital interface design and development, health
            science, and anything requiring people-skills!
          </p>
        </div>

        <div class="member">
          <div class="info">
            <img class="headshot" :src="vishu2x" alt />
            <div class="name-and-title">
              <h4>Vishu Tupili</h4>
              <p class="title">iOS Developer</p>
            </div>
          </div>
          <p>
            Vishu is a 3rd year Computer Engineering student at UofT with a
            passion for software development and entrepreneurship. She is a
            lifelong learner who is excited to work in a team that thrives on
            innovation. She is responsible for developing the front-end of the
            6ixplore iOS app. She looks forward to launching a responsive and
            intuitive app for users to discover and order from local
            restaurants!
          </p>
        </div>
        <!-- ADD BELOW -->
      </div>
    </section>
    <!-- Contributors -->
    <section>
      <h3>Contributors</h3>
      <div class="gallery">
        <div class="member">
          <div class="info">
            <img class="headshot" :src="clayon2x" alt />
            <div class="name-and-title">
              <h4>Clayon Levy</h4>
              <p class="title">Operations Coordinator</p>
            </div>
          </div>
          <p>
            Clayon is a recent UofT graduate whose passion lies in enhancing the
            student experience. Using the knowledge he gained from his B.Comm
            degree in Accounting, Clayon is responsible for the design and
            implementation of the accounting, legal, and charity frameworks of
            the organization. Having come to Canada within the last few years,
            he hopes everyone is able to explore the diverse cuisines available
            just as much as he has!
          </p>
        </div>

        <div class="member">
          <div class="info">
            <img class="headshot" :src="kay2x" alt />
            <div class="name-and-title">
              <h4>Kay Otsubo</h4>
              <p class="title">UX Researcher</p>
            </div>
          </div>
          <p>
            With her master’s degree in psychology and knowledge in UX, Kay
            brings a genuine curiosity and keen eye for detail in the research
            and design of our product to ensure it meets our user’s needs. As
            the lead researcher, she meticulously ensures that our users come
            first while achieving our business’ objectives. With her versatile
            skills, she is a true team player as she also lends a hand to our
            social media and HR as we actively grow our company.
          </p>
        </div>

        <div class="member">
          <div class="info">
            <img class="headshot" :src="empty" alt />
            <div class="name-and-title">
              <h4>Minh H.</h4>
              <p class="title">iOS Developer</p>
            </div>
          </div>
          <p>
            Minh is a Minimum Viable Product (MVP) developer with a passion for
            good code, focused on efficiency, and a love for new projects.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h3>Our Values</h3>
      <div class="value-grid">
        <div class="speed">
          <h4>Speed</h4>
          <p>
            The foundation for the work we do lies in looking for novel and
            disruptive solutions,
          </p>
        </div>
        <div class="adaptable">
          <h4>Adaptable</h4>
          <p>
            One of our biggest strengths is our ability to adapt to a rapidly
            changing climate and stay ahead of the curve,
          </p>
        </div>
        <div class="commitment">
          <h4>Commitment</h4>
          <p>
            Our team is transparent and we will always stand by our word with
            our customers, partners and each other,
          </p>
        </div>
        <div class="innovation">
          <h4>Innovation</h4>
          <p>
            The foundation for the work we do lies in looking for novel and
            disruptive solutions,
          </p>
        </div>
        <div class="community">
          <h4>Community</h4>
          <p>
            We are committed to making a positive impact in our community and
            giving back every step of the way
          </p>
        </div>
      </div>
    </section>
    <p class="credits">
      &copy; 6ixplore 2021
    </p>
  </div>
</template>

<script>
import webDecorAbout from "@/assets/webDecorAbout.svg";
import sai2x from "@/assets/Members/sai@2x.png";
import maureen2x from "@/assets/Members/maureen@2x.png";
import vishu2x from "@/assets/Members/vishu@2x.png";
import ozair2x from "@/assets/Members/ozair@2x.png";
import clayon2x from "@/assets/Members/clayon@2x.png";
import kay2x from "@/assets/Members/kay@2x.png";
import empty from "@/assets/Members/empty@2x.png";

export default {
  name: "About",
  metaInfo: {
    title: "About Us"
  },
  data: () => ({
    webDecorAbout,
    sai2x,
    maureen2x,
    vishu2x,
    ozair2x,
    clayon2x,
    kay2x,
    empty
  })
};
</script>

<style scoped>
.container {
  padding: 0 2.5em;
}

.decor-about {
  position: absolute;
  top: 0;
  left: -3em;
  z-index: -1;
  width: 65%;
  height: auto;
}

.body-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
  padding: 0 2em;
  text-align: center;
}

.secondary-text,
p {
  max-width: 55ch;
}

.secondary-text {
  font-size: 1em;
  padding-bottom: 2.5em;
}

.member,
.speed,
.adaptable,
.commitment,
.innovation,
.community {
  padding: 2em 0 3.5em 0;
}

.headshot {
  width: 6.2em;
  height: auto;
}

.info {
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.5em;
}

.name-and-title {
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  padding: 0 0 1em 2em;
}

h1 {
  padding-bottom: 0.5em;
  font-weight: 600;
  font-size: 1.875em;
}

h3 {
  margin-top: 8.75em;
}

p {
  color: var(--primary-txt);
  font-size: 1em;
}

.gallery {
  margin-top: 2em;
}

.title {
  font-size: 0.85em;
}

.credits {
  font-weight: 400;
  font-size: 1em;
  text-align: center;
  padding: 10em 0 4em 0;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .decor-about {
    top: 3em;
    right: 6em;
  }

  .gallery,
  .value-grid {
    display: flex;
    flex-wrap: wrap;
  }

  .member {
    padding-right: 5.5em;
    width: 32%;
  }

  .speed,
  .adaptable,
  .commitment,
  .innovation,
  .community {
    padding-right: 2em;
    width: 30%;
  }
}
</style>
