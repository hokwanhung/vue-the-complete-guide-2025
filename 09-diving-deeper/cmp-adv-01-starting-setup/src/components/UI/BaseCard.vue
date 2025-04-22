<!-- REMARK: You can also put the stylings into App.vue, 
 which is another effective way. -->
<template>
  <div>
    <!-- REMARK: This is not working because it's not rendered as 
     HTMLContent, and also with Vue features. -->
    <!-- {{ content }} -->
    <!-- REMARK: Allow receive HTML content as child with Vue features. -->
    <header v-if="$slots.header">
      <slot name="header">
        <!-- REMARK: Can add fallback content to slot when there's no content. -->
        <h2>The Default</h2>
      </slot>
    </header>
    <!-- REMARK: The unamed slot would be the default, but only one. -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  // REMARK: This is not working.
  // props: ['content'],
  mounted() {
    // REMARK: $slot reveals all data with slots (e.g., '.default', '.header').
    // REMARK: If it's not present, the value would be 'undefined'.
    console.log(this.$slot);
  }
}
</script>

<!-- REMARK: scoped atrributes actually stay the same with slots. -->
<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>