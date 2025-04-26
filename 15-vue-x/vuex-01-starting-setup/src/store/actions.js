export default {
  login(context) {
    // REMARK: Imagine sending some HTTP requests.
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  }
};