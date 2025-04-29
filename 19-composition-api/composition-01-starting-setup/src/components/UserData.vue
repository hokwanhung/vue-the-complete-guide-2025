<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <slot></slot>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { computed, inject, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  name: 'user-data',
  // REMARK: It is possible to merge Composition and Options API.
  props: ['firstName', 'lastName'],
  // REMARK: context contains attrs(all fall-through attributes), emits and slots.
  setup(props, context) {

    context.emit(); // equals to this.$emit()

    const age = inject('userAge'); // REMARK: Only change the value in the place provided, for more predictable outcome.

    const uName = computed(() => {
      // REMARK: At this time, the Vue instance isn't ready and it will return errors using this.
      // return this.firtName + ' ' + this.lastName;
      return props.firstName + ' ' + props.lastName;
    })

    return { userName: uName, age };
  }
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
}
</script>