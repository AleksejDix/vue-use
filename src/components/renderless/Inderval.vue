<script>
import { onBeforeUnmount, onMounted } from "@vue/composition-api";
export default {
  props: {
    time: {
      type: Number,
      default: 1000
    }
  },
  setup(props, { emit }) {
    let id;
    onMounted(() => {
      id = window.setInterval(() => {
        emit("tick");
      }, props.time);
    });
    onBeforeUnmount(() => {
      window.clearInterval(id);
    });
  },
  render: () => null
};
</script>
