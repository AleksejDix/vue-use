import {
  ref,
  onMounted,
  onUnmounted,
  onBeforeMount
} from "@vue/composition-api";

export default function useAppearanceMode() {
  const mode = ref(undefined);

  const MediaQueryList =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  const getAppearanceMode = () => {
    mode.value = MediaQueryList.matches ? "dark" : "light";
  };

  onBeforeMount(getAppearanceMode);

  onMounted(() => {
    MediaQueryList.addListener(getAppearanceMode);
  });

  onUnmounted(() => {
    MediaQueryList.removeListener(getAppearanceMode);
  });

  return mode;
}
