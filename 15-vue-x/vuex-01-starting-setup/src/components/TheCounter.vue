<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.cjs.js';

export default {
  name: 'the-counter',
  computed: {
    // counter() {
    //   // REMARK: Props are still important for parent-child passing, 
    //   // but state is great for componentw-wide state.
    //   // return this.$store.state.counter;
    //   return this.$store.getters.finalCounter;
    // },
    // REMARK: Auto get getters with mapGetters.
    ...mapGetters('numbers', ['finalCounter'])
  },
}
</script>