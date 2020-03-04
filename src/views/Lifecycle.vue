<template>
  <div>
    <button @click="visible = !visible">hide</button>
    <component
      :is="dynamicComponent"
      @hook:beforeCreate="log('beforeCreated')"
      @hook:created="log('created')"
      @hook:beforeMount="log('beforeMounted')"
      @hook:mounted="log('mounted')"
      @hook:beforeUpdated="log('beforeUpdated')"
      @hook:updated="log('updated')"
      @hook:beforeDestroy="log('beforeDestroy')"
      @hook:destroyed="log('destroyed')"
    />
  </div>
</template>

<script>
import Clock from "@/components/Clock";
export default {
  components: {
    Clock
  },
  data() {
    return {
      visible: true,
      dynamicComponent: "Clock"
    };
  },
  methods: {
    log() {
      // console.log(text);
    }
  }
};
</script>

<style></style>
