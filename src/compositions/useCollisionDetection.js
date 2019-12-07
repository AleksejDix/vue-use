import { ref } from "@vue/composition-api";

export default function useCollisionDetection() {
  const check = (trigger, tooltip) => {
    const t = trigger.value.getBoundingClientRect();
    const tip = tooltip.value.getBoundingClientRect();
    console.log(t, tip);
  };
  // const options = {
  //   width: 256
  // };
  // const coords = reactive({});

  // const style = computed(() => ({
  //   left: coords.left + "px",
  //   right: coords.right + "px",
  //   top: coords.top + "px",
  //   bottom: coords.bottom + "px"
  // }));

  const style = ref({});

  // onMounted(() => {
  //   const box = trigger.value.getBoundingClientRect();

  //   console.log(box, options);

  //   coords.left = box.left + "px";
  //   coords.top = box.top + box.height + "px";
  // });

  return { style, check };
}
