import { Machine, assign } from "xstate";

export default Machine(
  {
    id: "select",
    on: {
      remove: {
        target: "#select.selector",
        actions: ["remove"]
      }
    },
    type: "parallel",
    states: {
      selector: {
        initial: "unknown",
        on: {
          click: {
            target: "#select.browse.open"
          }
        },
        states: {
          unknown: {
            on: {
              "": [
                { target: "#select.selector.unselected", cond: "isUnselected" },
                { target: "#select.selector.selected", cond: "isSelected" }
              ]
            }
          },
          unselected: {},
          selected: {}
        }
      },
      browse: {
        initial: "close",
        states: {
          close: {},
          open: {
            on: {
              select: {
                target: ["#select.browse.close", "#select.selector.selected"],
                actions: "select"
              },
              close: {
                target: ["#select.browse.close"]
              }
            }
          }
        }
      }
    }
  },
  {
    actions: {
      select: assign({
        selected: (context, event) => event.option
      }),
      remove: assign({
        selected: () => ""
      })
    },
    guards: {
      isSelected: c => c.selected,
      isUnselected: c => !c.selected
    }
  }
);
