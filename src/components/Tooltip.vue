<template>
  <mark
    :style="{ cursor: 'help' }"
    ref="trigger"
    @mouseover="toggle"
    @mouseout="toggle"
  >
    <slot></slot>
    <portal to="tooltip">
      <div
        v-if="state"
        ref="tooltip"
        class="absolute bg-white border rounded shadow py-2 px-4 text-sm w-64 left-0"
      >
        {{ text }}
      </div>
    </portal>
  </mark>
</template>

<script>
import useToggle from "./../compositions/useToggle";
import { ref } from "@vue/composition-api";

export default {
  props: {
    text: String
  },
  setup() {
    const trigger = ref(null);
    const tooltip = ref(null);
    const { state, toggle } = useToggle();
    return { state, toggle, tooltip, trigger };
  }
};
</script>
