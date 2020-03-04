import { Machine, assign } from "xstate";

const addWater = assign({
  amount: context => context.amount + 1,
  message: "added water"
});

const emptyGlass = assign({
  amount: context => (context.amount = 0)
});

const glassIsFull = context => context.amount >= 100;

const lightMachine = Machine(
  {
    id: "glass",
    initial: "empty",
    context: {
      amount: 0
    },
    states: {
      empty: {
        on: {
          FILL: {
            target: "filling",
            actions: "addWater"
          }
        }
      },
      pause: {
        on: {
          FILL: {
            target: "filling",
            actions: "addWater"
          }
        }
      },
      filling: {
        after: {
          16: [
            {
              target: "full",
              cond: "glassIsFull"
            },
            {
              target: "filling",
              actions: "addWater"
            }
          ]
        },
        on: {
          PAUSE: {
            target: "pause"
          }
        }
      },
      full: {
        on: {
          EMPTY: {
            target: "empty",
            actions: "emptyGlass"
          }
        }
      }
    }
  },
  {
    actions: {
      addWater,
      emptyGlass
    },
    guards: { glassIsFull }
  }
);
export default lightMachine;
