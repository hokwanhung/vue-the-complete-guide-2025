<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  name: 'favourite-value',
  computed: {
    counter() {
      // return this.$store.state.counter * 2;
      // return this.$store.getters.finalCounter;
      return this.$store.getters['numbers/normalizedCounter'];
    }
  }
}
</script>