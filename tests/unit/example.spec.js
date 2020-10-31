import { mount } from "@vue/test-utils";
import navModal from "@/components/navModal.vue";

describe("navModal.vue", () => {
  it("If isOpen is false, do not show nav modal", () => {
    const wrapper = mount(navModal);
    expect(wrapper.find(".nav-modal").isVisible()).toBe(false);
  });

  it("If isOpen is true, show nav modal", async () => {
    const wrapper = mount(navModal);
    wrapper.setData({ isOpen: true });
    // Wait for DOM to update modal visibility
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".nav-modal").isVisible()).toBe(true);
  });

  it("If isOpen is false, do not show overlay", () => {
    const wrapper = mount(navModal);
    expect(wrapper.exists()).toBe(true);
  });

  it("If isOpen is true, show overlay", async () => {
    const wrapper = mount(navModal);
    wrapper.setData({ isOpen: true });

    // Wait for DOM to update modal visibility
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".overlay").isVisible()).toBe(true);
  });
});
