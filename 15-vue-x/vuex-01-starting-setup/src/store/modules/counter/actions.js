export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 2000); // REMARK: bad practice to use setTimeout in mutations.
  },
  increase(context, payload) {
    // REMARK: Context holds state, getters, commit, dispatch and etc. for manipulations.
    context.commit('increase', payload);
  },
  login() {
    // REMARK: This will clash with main module without namespaced.
  }
};