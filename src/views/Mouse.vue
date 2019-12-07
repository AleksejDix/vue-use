<template>
  <div>
    <h1>Use Global mouse position</h1>
    x {{ windowMouseX }} | y {{ windowMouseY }}
    <div class="box" ref="boxRef">{{ elMouseX }},{{ elMouseY }}</div>
  </div>
</template>

<script>
import useMousePosition from "../compositions/useMousePosition";
import { ref } from "@vue/composition-api";

export default {
  setup() {
    const boxRef = ref(null);

    const { x: windowMouseX, y: windowMouseY } = useMousePosition();
    const { x: elMouseX, y: elMouseY } = useMousePosition(boxRef);

    return {
      windowMouseX,
      windowMouseY,
      elMouseX,
      elMouseY,
      boxRef
    };
  }
};
</script>

<style>
.box {
  background: gold;
  height: 10rem;
  width: 10rem;
  margin: 5rem;
}
</style>
