<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import useAlert from '../hooks/alert';
import UserAlert from './UserAlert.vue';

export default {
  // mixins: [alertMixins],
  setup() {
    // REMARK: We are passing the ref to the template, but it's still the same reactive object.
    const [isAlertVisible, showAlert, hideAlert] = useAlert();

    return {
      isAlertVisible,
      showAlert,
      hideAlert,
    };
  },
  components: {
    UserAlert,
  }
};
</script>