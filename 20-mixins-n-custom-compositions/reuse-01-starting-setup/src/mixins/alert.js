// import UserAlert from './UserAlert.vue';

// REMARK: Reuse common scripts is great,
// but it might be difficult for large project with many programmers.
export default {
  // REMARK: But not for components.
  // components: {
  //   UserAlert,
  // },
  data() {
    return {
      alertIsVisible: false,
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    },
  },
};