<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3>OUTPUT COURSE GOAL</h3> -->
  <h3 v-if="!sRefIsHidden">ref: {{ sRefGoal }}</h3>
  <h3 v-if="!oRefCourse.isGoalHidden">refObj: {{ oRefCourse.courseGoal }}</h3>
  <h3 v-if="!reactiveCourse.isGoalHidden">reactive: {{ reactiveCourse.courseGoal }}</h3>
  <h3 v-if="!isGoalHidden">Option: {{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="sRefToggleGoal">ref: Toggle Goal</button>
  <button @click="oRefToggleGoal">refObj: Toggle Goal</button>
  <button @click="reactiveToggleGoal">reactive: Toggle Goal</button>
  <button @click="toggleGoal">option: Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, reactive, isRef } from 'vue';

export default {
  setup() {
    const sRefCourseGoal = ref('Learn to write vue');
    const sRefIsGoalHidden = ref(false);

    const oRefCourse = ref({
      courseGoal: 'Learn to write vue',
      isGoalHidden: false,
    });

    const reactiveCourse = reactive({
      courseGoal: 'Learn to write vue',
      isGoalHidden: false,
    })

    const sRefToggleIsGoalHidden = () => {
      sRefIsGoalHidden.value = !sRefIsGoalHidden.value;
    }

    const oRefToggleIsGoalHidden = () => {
      oRefCourse.value.isGoalHidden = !oRefCourse.value.isGoalHidden;
    }

    const reactiveToggleIsGoalHidden = () => {
      reactiveCourse.isGoalHidden = !reactiveCourse.isGoalHidden;
    }

    return {
      sRefGoal: sRefCourseGoal,
      sRefIsHidden: sRefIsGoalHidden,
      sRefToggleGoal: sRefToggleIsGoalHidden,
      oRefCourse: oRefCourse,
      oRefToggleGoal: oRefToggleIsGoalHidden,
      reactiveCourse: reactiveCourse,
      reactiveToggleGoal: reactiveToggleIsGoalHidden,
    };
  },
  data() {
    return {
      courseGoal: 'Learn to write vue',
      isGoalHidden: false,
    }
  },
  methods: {
    toggleGoal() {
      this.isGoalHidden = !this.isGoalHidden;
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>