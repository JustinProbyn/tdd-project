import { shallowMount, mount } from "@vue/test-utils";
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
  it("displays the climber's name", () => {
    const climber = wrapper.find(".climber-name");
    expect(climber.text()).toBe("John");
  });
});

test("displays the number of failed attempts before giving up", () => {
  const wrapper = mount(FallsCounter);
  const number = wrapper.vm.maxFailedAttempts;
  expect(number).toBe(5);
});

test("there is a button", () => {
  const wrapper = mount(FallsCounter);
  wrapper.find("button");
});

describe("this button", () => {
  it("button is clicked", () => {
    const wrapper = mount(FallsCounter);
    const button = wrapper.find("#fallButton");
    const spy = spyOn(wrapper.vm, "increaseFalls");
    button.trigger("click");

    expect(spy).toBeCalled();
  });

  it("increases failedAttempts on click", async () => {
    expect(wrapper.text()).toContain("0");
    const button = wrapper.find("#fallButton");
    await button.trigger("click");
    expect(wrapper.text()).toContain("1");
  });

  it("john gives up", async () => {
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
