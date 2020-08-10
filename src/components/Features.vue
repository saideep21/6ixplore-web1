<template>
  <div class="container">
    <h3>Our Features</h3>
    <div class="modal">
      <img class="img-1" :src="step1" alt="Benefit 1" />
      <h3 class="heading-1">For our customers, we want to highlight our core benefits:</h3>
      <div class="list-1">
        <ul v-for="item in customerBenefitsList" :key="item">
          <li>{{ item }}</li>
        </ul>
      </div>
      <img class="img-2" :src="step2" alt="Benefit 2" />
      <h3 class="heading-2">For businesses, this means:</h3>
      <div class="list-2">
        <ul v-for="item in businessBenefitsList" :key="item">
          <li>{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import step1 from "@/assets/step1.svg";
import step2 from "@/assets/step2.svg";

export default {
  name: "Features",
  data: () => ({
    // Benefits Icons
    step1,
    step2,
    // Benefits Lists
    customerBenefitsList: [
      "Discover more in the city you knew",
      "Get better deals for every repeat visit",
      "Plan and share experiences with friends"
    ],
    businessBenefitsList: [
      "Getting new clients / customers",
      "Keeping your clients / customers",
      "No upfront charges, only commitment"
    ]
  })
};
</script>

<style scoped>
.container {
  margin-top: 8.75em;
}

.modal {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  gap: 1em;
  margin: 2em auto;
  padding: 1.5em 1.25em 1.5em 1.25em;
  background: #ffffff;
  box-shadow: -10px 10px 50px #d3d3d329;
  border-radius: 20px;
}

img {
  width: 2em;
  height: auto;
}

.img-1 {
  grid-area: 1 / 1 / 2 / 2;
}

.heading-1,
.heading-2 {
  font-weight: 400;
}

.heading-1 {
  grid-area: 1 / 2 / 2 / -1;
}

.list-1,
.list-2 {
  padding-left: 1em;
  font-size: 0.75em;
  color: var(--secondary-txt);
}

.list-1 {
  display: flex;
  flex-direction: column;
  grid-area: 2 / 2 / 3 / -1;
  padding-bottom: 2em;
}

.img-2 {
  grid-area: 3 / 1 / 4 / -1;
}

.heading-2 {
  grid-area: 3 / 2 / 4 / -1;
}

.list-2 {
  grid-area: 4 / 2 / -1 / -1;
}
</style>
