<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }"><button type="button" @click="activate('poor')">Poor</button></li>
    <li :class="{ active: modelValue === 'average' }"><button type="button"
        @click="activate('average')">Average</button></li>
    <li :class="{ active: modelValue === 'great' }"><button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'rating-control',
  // REMARK: By using v-model in parent component,
  props: ['model-value'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // }, // REMARK: Could not reflect to updates from props at the moment.
  // computed: {
  //   activeOption() {
  //     return this['model-value'];
  //   }
  // }, // REMARK: Can also use this, but why not just use props.
  methods: {
    activate(option) {
      // this.activeOption = option;
      this.$emit('update:modelValue', option);
    }
  }
}
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>