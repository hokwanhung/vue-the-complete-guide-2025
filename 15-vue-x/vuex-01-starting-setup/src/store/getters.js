export default {
  isUserAuthenticated(state) {
    return state.isLoggedIn;
  },
  isTestAuth() {
    return this.$store.getters.testAuth;
  }
};