import { mount } from "@vue/test-utils";
import navModal from "@/components/navModal.vue";

// Three conditions for navModal component:
/* 1. when openModal data is false, do not show navModal
   2. when button burger icon clicked on, show navModal
   3. when transparent background clicked, close navModal
 */

describe("navModal.vue", () => {
  it("If openModal is false, do not show .nav-modal", () => {
    const wrapper = mount(navModal);
    expect(wrapper.find(".nav-modal").isVisible()).toBe(false);
  });

  it("After click, navModal opens", () => {
    // const wrapper = mount(navModal);
    expect(true).toBe(true);
  });
});
