<template>
  <section> <!-- REMARK: Use <section> instead of <div>. (from solution) -->
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    }
  },
}
</script>