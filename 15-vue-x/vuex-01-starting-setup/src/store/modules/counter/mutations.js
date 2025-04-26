export default {
  increment(state) {
    state.counter = state.counter += 2;
  },
  increase(state, payload) {
    // REMARK: payload can be a string, number or object.
    state.counter = state.counter + payload.value;
  },
};