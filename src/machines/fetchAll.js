import { Machine, assign } from "xstate";
import { createFetchMachine } from "./fetch";
import { list } from "@/api/dogs";

const options = {
  services: {
    fetchEndpoint: list
  },
  actions: {
    try: assign({ tries: context => (context.tries += 1) }),
    reject: assign({ error: (_, event) => event.data }),
    fullfill: assign({ data: (_, event) => event.data })
  }
};

const machine1 = createFetchMachine(options);
const machine2 = createFetchMachine(options);

const spaceHeaterMachine = Machine({
  initial: 'off',
  states: {
    off: {
      on: { on: 'fetch' },
    },
    fetch: {
      type: 'parallel',
      states: {
        one: {
          initial: 'no',
          states: {
            no: {
              on: { TOGGLE: 'success' },
            },
            success: {
              type: 'final' 
            },
          },
        },
        two: {
          initial: 'no',
          states: {
            no: {
              on: { TOGGLE: 'success'  },
            },
            success: {
               type: 'final'
            },
          },
        },
      },
        onDone: 'done',
    },
    done: {
      on: {
        restart: 'fetch'
      }
    }
  },
})

export spaceHeaterMachine