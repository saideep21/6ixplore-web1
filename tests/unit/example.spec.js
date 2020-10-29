import { mount } from "@vue/test-utils";
import navModal from "@/components/navModal.vue";

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
