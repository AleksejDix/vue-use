<template>
  <button @click="send('TOGGLE')">
    {{ buttonText }}
  </button>
</template>

<script>
import useMachine from "@/compositions/useMachine";
import toggleMachine from "@/machines/toggle";
import { computed } from "@vue/composition-api";

export default {
  setup() {
    const { current, send } = useMachine(toggleMachine);

    const buttonText = computed(() =>
      current.value.value === "off"
        ? "Click to activate"
        : "Active! Click to deactivate"
    );

    return { send, buttonText };
  }
};
</script>
