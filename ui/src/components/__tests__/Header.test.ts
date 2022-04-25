import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import Header from "../Header.vue";

test("mount", async () => {
  expect(Header).toBeTruthy();

  const wrapper = mount(Header);

  expect(wrapper);
});
