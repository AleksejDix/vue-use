import { Machine } from "xstate";

export default Machine({
  id: "switsch",
  initial: "off",
  states: {
    off: {
      on: { SWITCH: "on" }
    },
    on: {
      on: { SWITCH: "off" }
    }
  }
});
