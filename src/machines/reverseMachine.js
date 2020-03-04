import { Machine, assign } from "xstate";

const reverse = assign({
  name: context =>
    context.name
      .split("")
      .reverse()
      .join("")
});

const lightMachine = Machine(
  {
    id: "streetlight",
    initial: "normal",
    context: {
      name: "Aleksej"
    },
    states: {
      normal: {
        on: {
          REVERSE: {
            target: "reversed",
            actions: "reverse"
          }
        }
      },
      reversed: {
        on: {
          REVERSE: {
            target: "normal",
            actions: "reverse"
          }
        }
      }
    }
  },
  {
    actions: {
      reverse
    }
  }
);
export default lightMachine;
