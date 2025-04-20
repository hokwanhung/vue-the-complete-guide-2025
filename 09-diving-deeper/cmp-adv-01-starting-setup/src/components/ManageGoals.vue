<template>
  <div>
    <h2>Manage Goals</h2>
    <!-- REMARK: input field is removed from the dom, 
     and the content is destroyed when switched. -->
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <ErrorAlert v-if="isInputInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirmError">Okay</button>
    </ErrorAlert>
  </div>
</template>

<!-- REMARK: If the scripts are empty, by default it is exported default. -->
<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.isInputInvalid = true;
      }
    },
    confirmError() {
      this.isInputInvalid = false;
    }
  }
}
</script>