import { Machine } from "xstate";

const config = {
  id: "fetchMachine",
  strict: true,
  initial: "idle",
  context: {
    data: undefined,
    error: undefined,
    tries: 0
  },
  states: {
    idle: {
      on: {
        LOAD: "pending"
      }
    },
    pending: {
      id: "fetchEnpoint",
      entry: ["try"],
      invoke: {
        src: "fetchEndpoint",
        onDone: {
          target: "fulfilled",
          actions: ["fullfill"]
        },
        onError: {
          target: "rejected",
          actions: ["reject"]
        }
      }
    },
    fulfilled: {
      on: {
        LOAD: "pending"
      }
    },
    rejected: {
      on: {
        LOAD: "pending"
      }
    }
  }
};

export default function createFetchMachine(options) {
  return Machine(config, options);
}
