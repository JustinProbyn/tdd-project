import { shallowMount } from "@vue/test-utils";
import FallsCounter from "../../src/views/FallsCounter.vue";

/*global spyOn*/

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(FallsCounter, {
    propsData: {
      climber: "John"
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("FallsCounter.vue", () => {
  it("should display the climber's name on the page", () => {
    const climber = wrapper.find(".climber-name");
    expect(climber.text()).toBe("John");
  });

  it("displays the number of failed attempts allowed before he gives up", () => {
    const number = wrapper.vm.maxFailedAttempts;
    expect(number).toBe(5);
  });

  it("should display a button on the page", () => {
    wrapper.find("button");
  });

  it("should fire function 'increaseFalls' when button is clicked", () => {
    const button = wrapper.find("#fallButton");
    const spy = spyOn(wrapper.vm, "increaseFalls");
    button.trigger("click");
    expect(spy).toBeCalled();
  });

  it("increases data property 'failedAttempts' when clicking the button which runs the function 'increaseFalls'", async () => {
    expect(wrapper.text()).toContain("0");
    const button = wrapper.find("#fallButton");
    await button.trigger("click");
    expect(wrapper.text()).toContain("1");
  });

  it("displays that john gives up ONLY when his falls exceed that of the maximum allowed falls", async () => {
    const text = wrapper.find("#gives-up");
    expect(text).toBeUndefined;
    const button = wrapper.find("#fallButton");
    await button.trigger("click");
    await button.trigger("click");
    await button.trigger("click");
    await button.trigger("click");
    await button.trigger("click");
    expect(wrapper.text()).toContain("5");
    expect(wrapper.text()).toContain("John gave up");
  });
});
