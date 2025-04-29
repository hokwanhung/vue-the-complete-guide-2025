<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import useAlert from '../hooks/alert';
// import alertMixins from '../mixins/alert';
import UserAlert from './UserAlert.vue';

export default {
  setup() {
    // REMARK: Same as mixin, but just manually merging the two setups().
    const alertTitle = ref('Delete the User?');

    // REMARK: Can pass params to the custom hooks.
    // REMARK: Custom hooks are easier to configure, and can be better customise,
    // what to expose and also what to modify, and can pass in data and stuff.
    const [isAlertVisible, showAlert, hideAlert] = useAlert(true);

    return {
      isAlertVisible,
      showAlert,
      hideAlert,
      alertTitle,
    };
  },
  // mixins: [alertMixins],
  components: {
    UserAlert,
  },
  // REMARK: Vue can merge mixins with the regular Options API.
  // data() {
  //   return {
  //     alertTitle: 'Delete the User?',
  //     // REMARK: But when clashes, the option instead of mixin wins.
  //     isAlertVisible: true,
  //   }
  // }
};
</script>