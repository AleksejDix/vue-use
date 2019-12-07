<template>
  <div>
    <button @click="toggleEdit">
      edit user
      <modal :open="editState" @close="toggleEdit">
        <div>
          Edit
        </div>
      </modal>
    </button>
    <button @click="toggleCreate">
      create user
      <modal :open="createState" @close="toggleCreate">
        <p>
          Create
        </p>
      </modal>
    </button>
  </div>
</template>

<script>
import useToggle from "@/compositions/useToggle";
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },
  setup() {
    const { state: createState, toggle: toggleCreate } = useToggle();
    const { state: editState, toggle: toggleEdit } = useToggle();

    return {
      createState,
      toggleCreate,
      editState,
      toggleEdit
    };
  }
};
</script>

<style></style>
