import { shallowMount } from "@vue/test-utils";
import ClimbRating from "../../src/views/ClimbRating.vue";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ClimbRating, {
    propsData: {
      maxStars: 5,
      initialRating: 4
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("ClimbRating.vue", () => {
  it("displays the rating stars", () => {
    const stars = wrapper.findAll(".rating-stars");
    expect(stars.length).toBe(5);
  });
  it("displays the highlighted stars", () => {
    const activeStars = wrapper.findAll(".rating-stars.active");
    expect(activeStars.length).toBe(4);
  });
  it("renders a review of the climb", () => {
    const review = wrapper.find(".review");
    expect(review.text()).toBe("4 out of 5");
  });
});
