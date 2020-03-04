<template>
  <div>
    <slot v-bind="{ current, service, send }"></slot>
  </div>
</template>

<script>
import { interpret } from "xstate";

export default {
  props: {
    machine: {
      type: Object,
      required: true,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      current: ""
    };
  },
  computed: {
    initialState() {
      if (!this.service.initialState) return;
      return this.service.initialState;
    },
    actions() {
      return this.options.actions;
    },
    services() {
      return this.options.services;
    }
  },

  created() {
    // this.sevice won't be reactive
    this.service = interpret(this.machine).onTransition(state => {
      if (state.changed) {
        this.$emit("change", state);
        this.current = state;
      }
    });

    this.current = this.service.initialState;
  },
  methods: {
    send(event) {
      return this.service.send(event);
    }
  },
  beforeMount() {
    this.service.start(this.initialState);
  },
  beforeDestroy() {
    this.service.stop();
  }
};
</script>
