<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- Scoped slot can let components inside the slot, to use the template data, etc. -->
      <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  // REMARK: Use name to get rid of no-unused-components error from eslint (or use PascalCase).
  name: 'course-goals',
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue'],
    };
  },
}
</script>