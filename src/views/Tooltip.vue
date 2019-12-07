<template>
  <div class="block border flex justify-between">
    <tooltip
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores porro
    veritatis minima ipsum. Accusamus, rem velit!"
      >a</tooltip
    >
    <tooltip text="You hovered over the second one!">b</tooltip>
  </div>
</template>

<script>
import Tooltip from "../components/Tooltip";
export default {
  components: {
    Tooltip
  }
};
</script>

<style></style>
