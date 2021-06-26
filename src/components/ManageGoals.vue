<template>
  <h2>ManageGoals</h2>
  <input type="text" ref="input" />
  <button @click="setGoal">Submit</button>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      The input is invalid.
      <button @click="inputIsInvalid = false">
        I acknowldge this grave mistake
      </button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.input.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
  },
};
</script>