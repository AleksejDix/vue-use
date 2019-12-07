import { reactive, computed } from "@vue/composition-api";
import useCounter from "./useCounter.js";
export default function usePlayer(options) {
  const state = reactive({
    songs: options.songs || [],
    select: options.select - 1,
    loop: options.loop || false
  });

  const { up, down, counter } = useCounter(state.select);

  const current = computed({
    get: () => counter.value,
    set: value => (counter.value = value)
  });

  const isFirst = computed(() => counter.value <= 0);
  const isLast = computed(() => counter.value >= total.value - 1);
  const total = computed(() => state.songs.length);

  const isCurrent = index => {
    return index === current.value;
  };

  const select = value => (current.value = value);

  const prev = () => {
    if (!state.loop && isFirst.value) return;

    if (isFirst.value) {
      counter.value = total.value - 1;
      return;
    }

    down();
  };

  const next = () => {
    if (!state.loop && isLast.value) return;

    if (isLast.value) {
      counter.value = 0;
      return;
    }

    up();
  };

  return {
    next,
    prev,
    current,
    select,
    total,
    isFirst,
    isLast,
    isCurrent,
    songs: state.songs
  };
}
