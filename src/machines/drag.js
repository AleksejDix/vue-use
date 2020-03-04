import { Machine, assign } from "xstate";

const dragMachine = Machine(
  {
    id: "drag",
    initial: "idle",
    context: {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      pointerY: 0,
      pointerX: 0
    },
    states: {
      idle: {
        on: {
          mousedown: {
            target: "dragging",
            actions: ["getClickCoords"]
          }
        }
      },
      dragging: {
        on: {
          mouseup: {
            target: "idle",
            actions: ["stopDrag"]
          },
          mousemove: {
            target: "dragging",
            actions: ["drag"]
          }
        }
      }
    }
  },
  {
    actions: {
      stopDrag: assign({
        x: context => {
          return context.x + context.dx;
        },
        y: context => {
          return context.y + context.dy;
        },
        dx: 0,
        dy: 0,
        pointerX: 0,
        pointerY: 0
      }),
      drag: assign({
        dx: (context, event) => {
          return event.clientX - context.pointerX;
        },
        dy: (context, event) => {
          return event.clientY - context.pointerY;
        }
      }),
      getClickCoords: assign({
        pointerY: (context, event) => {
          return event.clientY;
        },
        pointerX: (context, event) => {
          return event.clientX;
        }
      })
    }
  }
);
export default dragMachine;
