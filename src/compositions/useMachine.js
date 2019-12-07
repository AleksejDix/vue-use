import {
  reactive,
  ref,
  watch,
  onBeforeMount,
  onBeforeUnmount
} from "@vue/composition-api";
import { interpret } from "xstate";

export default function useMachine({ machine, options }) {
  const {
    context,
    guards,
    actions,
    activities,
    services,
    delays,
    ...interpreterOptions
  } = options;

  const machineConfig = {
    context,
    guards,
    actions,
    activities,
    services,
    delays
  };

  const machineRef = reactive({});

  machineRef.current = machine.withConfig(machineConfig, {
    ...machine.context,
    ...context
  });

  const serviceRef = reactive({});
  serviceRef.current = interpret(
    machineRef.current,
    interpreterOptions
  ).onTransition(state => {
    if (state.changed) {
      current.value = state;
    }
  });

  const current = ref(serviceRef.current.initialState);

  watch(() => {
    Object.assign(serviceRef.current.machine.options.actions, actions);
  });

  watch(() => {
    Object.assign(serviceRef.current.machine.options.services, services);
  });

  onBeforeMount(() => {
    serviceRef.current.start();
  });

  onBeforeUnmount(() => {
    serviceRef.current.stop();
  });

  return {
    service: serviceRef.current,
    send: serviceRef.current.send,
    current
  };
}
