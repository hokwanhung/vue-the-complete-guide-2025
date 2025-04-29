export default {
  // REMARK: Use mutations to standarise the methods that change the state.
  // REMARK: Mutations must be synchronous.
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
}