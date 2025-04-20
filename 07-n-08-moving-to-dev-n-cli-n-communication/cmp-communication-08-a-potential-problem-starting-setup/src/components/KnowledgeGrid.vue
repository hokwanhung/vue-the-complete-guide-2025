<template>
  <ul>
    <knowledge-element v-for="topic in topics" :key="topic.id" :id="topic.id" :topic-name="topic.title"
      :description="topic.description" @select-topic="$emit('select-topic', $event)"></knowledge-element>
  </ul>
</template>

<script>
export default {
  // REMARK: Can only inject what's provided on a higher level (parent-child relationships).
  inject: ['topics'],
  // props: ['topics'],
  // emits: ['select-topic']
};
</script>