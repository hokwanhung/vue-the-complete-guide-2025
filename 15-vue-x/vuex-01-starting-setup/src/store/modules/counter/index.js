import counterMutations from "./mutations";
import counterActions from "./actions";
import counterGetters from "./getters";

export default {
  // REMARK: Then you have to use 'numbers' defined in modules to access this.
  namespaced: true,
  // REMARK: To modularise the counter for better management.
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
