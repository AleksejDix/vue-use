import { ref } from "@vue/composition-api";

export default function useToggle() {
  const state = ref(false);

  function toggle() {
    state.value = !state.value;
  }

  return {
    state,
    toggle
  };
}
