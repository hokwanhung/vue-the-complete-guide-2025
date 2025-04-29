<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'user-data',
  // REMARK: It is possible to merge Composition and Options API.
  props: ['firstName', 'lastName', 'age'],
  setup(props) {

    const uName = computed(() => {
      // REMARK: At this time, the Vue instance isn't ready and it will return errors using this.
      // return this.firtName + ' ' + this.lastName;
      return props.firstName + ' ' + props.lastName;
    })

    return { userName: uName };
  }
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
}
</script>