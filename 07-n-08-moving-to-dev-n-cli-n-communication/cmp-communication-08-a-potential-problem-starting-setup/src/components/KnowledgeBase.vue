<!-- REMARK: Act as a pass-through component. -->
<!-- REMARK: In this (original) case, the event passes through 2 components, and the data through 1 component. -->
<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid @select-topic="$emit('select-topic', $event)"></knowledge-grid>
  </section>
</template>

<script>
export default {
  // props: ['topics'],
  // emits: ['select-topic'],
};
</script>