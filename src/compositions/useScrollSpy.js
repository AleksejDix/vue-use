import {
  reactive,
  onMounted,
  onUnmounted,
  computed
} from "@vue/composition-api";

export default function useScrollSpy(
  { to, on },
  options = {
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }
) {
  const state = reactive({
    on,
    to
  });

  const sections = computed(
    () => Array.from(state.on.querySelectorAll(".section")) || []
  );

  const links = computed(() =>
    Array.from(state.to.querySelectorAll("a") || [])
  );

  const handleIntersection = entries => {
    for (const entry of entries) {
      if (entry.intersectionRatio > 0.5) {
        const index = sections.value.indexOf(entry.target);
        links.value[index].classList.add("active");
      } else {
        const index = sections.value.indexOf(entry.target);
        links.value[index].classList.remove("active");
      }
    }
  };

  const intersectionObserver = new IntersectionObserver(
    handleIntersection,
    options
  );

  const observe = section => {
    intersectionObserver.observe(section);
  };

  const unobserve = section => {
    intersectionObserver.unobserve(section);
  };

  onMounted(() => {
    sections.value.forEach(section => intersectionObserver.observe(section));
  });

  onUnmounted(() => {
    sections.value.forEach(section => intersectionObserver.unobserve(section));
  });

  return {
    observe,
    unobserve
  };
}
