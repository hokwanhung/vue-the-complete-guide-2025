<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  name: 'the-counter',
  computed: {
    counter() {
      // REMARK: Props are still important for parent-child passing, 
      // but state is great for componentw-wide state.
      return this.$store.state.counter;
    }
  },
}
</script>