<template>
  <div class="container">
    <img class="decor-about" :src="webDecorAbout" alt="" />
    <main id="skip-nav" class="body-text">
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
        <div class="member1">
          <div class="info">
            <img class="headshot" :src="member1" alt />
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
        <div class="member2">
          <div class="info">
            <img class="headshot" :src="member2" alt />
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

        <div class="member3">
          <div class="info">
            <img class="headshot" :src="member3" alt />
            <div class="name-and-title">
              <h4>Maureen T'o</h4>
              <p class="title">UI/UX Designer</p>
            </div>
          </div>
          <p>
            A lifelong learner at heart, Maureen is a Kinesiology-student turned
            front-end developer and UI/UX designer. She is responsible for the
            interface design, as well as this website! From her degree, she uses
            her soft-skills, ethical considerations, and understanding of the
            way people learn to enhance digital experiences. She is interested
            in responsive web design, accessibility, SEO, and graphic design.
          </p>
        </div>
        <div class="member4">
          <div class="info">
            <img class="headshot" :src="member4" alt />
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
        <div class="member5">
          <div class="info">
            <img class="headshot" :src="member5" alt />
            <div class="name-and-title">
              <h4>Minh Huynh</h4>
              <p class="title">iOS Developer</p>
            </div>
          </div>
          <p>
            Minh is a Minimum Viable Product (MVP) developer with a passion for
            good code, focused on efficiency, and a love for new projects.
          </p>
        </div>
        <div class="member5B">
          <div class="info">
            <img class="headshot" :src="member5B" alt />
            <div class="name-and-title">
              <h4>Timothy Samson</h4>
              <p class="title">Strategy</p>
            </div>
          </div>
          <p>N/A</p>
        </div>
        <div class="member5C">
          <div class="info">
            <img class="headshot" :src="member5C" alt />
            <div class="name-and-title">
              <h4>Shirley Xia</h4>
              <p class="title">Full-stack Developer</p>
            </div>
          </div>
          <p>
            Shirley is a skilled and versatile software developer with more than
            two years of professional experience in working with business owners
            owners and clients to deliver high-quality, well-tested software
            applications. She is always learning and looking to use her skills
            to contribute to the community.
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
      <img :src="copyrightIcon" alt />
      Copyright 6ixplore 2020
    </p>
  </div>
</template>

<script>
import webDecorAbout from "@/assets/webDecorAbout.svg";
import member1 from "@/assets/Members/member1.png";
import member2 from "@/assets/Members/member2.png";
import member3 from "@/assets/Members/member3.png";
import member4 from "@/assets/Members/member4.png";
import member5 from "@/assets/Members/member5.png";
import member5B from "@/assets/Members/member5B.png";
import member5C from "@/assets/Members/member5C.png";
import copyrightIcon from "@/assets/copyrightIcon.svg";

export default {
  name: "About",
  data: () => ({
    webDecorAbout,
    member1,
    member2,
    member3,
    member4,
    member5,
    member5B,
    member5C,
    copyrightIcon
  })
};
</script>

<style scoped>
.container {
  padding: 0 1.625em;
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

/* 5B and 5C are named such because both
share default appearance */
.member1,
.member2,
.member3,
.member4,
.member5,
.member5B,
.member5C,
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
  font-weight: 400;
  font-size: 1.875em;
  padding-bottom: 0.5em;
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
  font-weight: 700;
  font-size: 1em;
  text-align: center;
  padding: 40% 0 10% 0;
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

  .member1,
  .member2,
  .member3,
  .member4,
  .member5,
  .member5B,
  .member5C {
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
