export default {
  // eslint-disable-next-line no-unused-vars
  testAuth(state, getters, rootState, rootGetters) {
    // REMARK: This should not work, because counterModule has no isLoggedIn.
    return state.isLoggedIn;
  },
  // eslint-disable-next-line no-unused-vars
  finalCounter(state, getters) {
    // REMARK: Use other getters to calculate results based on other getters.
    return state.counter * 3;
  },
  // REMARK: Use underscore to indicate only the second param is needed.
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter * 3;
    if (finalCounter < 0)
      return 0;

    if (finalCounter > 100)
      return 100;

    return finalCounter;
  },
};