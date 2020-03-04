<template>
  <div>
    <pre>
    {{ lightState.context }}
    </pre>
    <pre>{{ lightState.value }}</pre>
    <button @click="lightService.send('NEXT')">
      next
    </button>
    <button @click="toggleService.send('TOGGLE')">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import useMachine from "@/compositions/useMachine";
import toggleMachine from "@/machines/toggle";
import lightMachine from "@/machines/light";

import { computed } from "@vue/composition-api";

export default {
  setup() {
    const { current: toggleState, service: toggleService } = useMachine(
      toggleMachine
    );
    const { current: lightState, service: lightService } = useMachine(
      lightMachine
    );

    const buttonText = computed(() =>
      toggleState.value.value === "off"
        ? "Click to activate"
        : "Active! Click to deactivate"
    );

    return { toggleService, buttonText, lightState, lightService };
  }
};
</script>
