import { useMachine } from "@xstate/vue";
import createFetchMachine from "@/machines/fetch";
export default function useDogs(options) {
  const { state, send, service } = useMachine(createFetchMachine(options));
  return { state, send, service };
}
