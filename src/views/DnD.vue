<template>
  <Machine :machine="machine">
    <template #default="{current, send}">
      <div
        id="box"
        :style="{
          '--dx': current.context.dx,
          '--dy': current.context.dy,
          '--x': current.context.x,
          '--y': current.context.y
        }"
        :data-state="current.value"
        @mousedown="send"
      ></div>
      <GlobalEvents @mouseup="send" @mousemove="send" />
    </template>
  </Machine>
</template>

<script>
import drag from "@/machines/drag.js";
import Machine from "@/components/renderless/xstate-machine";

export default {
  components: {
    Machine
  },
  computed: {
    machine() {
      return drag;
    }
  }
};
</script>

<style>
* {
  position: relative;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

h1 {
  padding: 1rem;
}

#box {
  height: 100px;
  width: 100px;
  font-size: 10px;
  background-color: #41a9f3;
  left: calc(var(--x) * 1px);
  top: calc(var(--y) * 1px);
  transform: translate(calc(var(--dx) * 1px), calc(var(--dy) * 1px));
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

#box[data-state^="dragging"] {
  opacity: 0.8;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
}

#box[data-state="idle"] {
  transition: all 0.3s ease-in-out;
}
</style>
