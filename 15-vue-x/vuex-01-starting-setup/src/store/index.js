import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

import counterModule from './modules/counter';

const store = createStore({
  // REMARK: Can have multiple stores.
  modules: {
    // REMARK: Is on the same level with default ones even with naming.
    // REMARK: But the state in module is treated as local state,
    // mutations, actions and getters are global - so they cannot be directly accessed by other modules or default store.
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;