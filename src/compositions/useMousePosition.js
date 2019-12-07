import { ref, computed, onMounted, onUnmounted } from "@vue/composition-api";
export default function useMousePosition(elRef) {
  let domEl;

  const el = computed(() => {
    if (!elRef) return;
    return elRef.value;
  });

  const x = ref(0);
  const y = ref(0);

  const update = e => {
    x.value = el.value ? e.offsetX : e.pageX;
    y.value = el.value ? e.offsetY : e.pageY;
  };

  onMounted(() => {
    domEl = el.value ? el.value : window;
    domEl.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    domEl.removeEventListener("mousemove", update);
  });

  return { x, y };
}
