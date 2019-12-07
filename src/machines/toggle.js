import { Machine } from "xstate";

const toggleMachine = Machine({
  id: "toggle",
  initial: "off",
  states: {
    off: {
      on: { TOGGLE: "on" }
    },
    on: {
      on: { TOGGLE: "off" }
    }
  }
});

export default toggleMachine;
