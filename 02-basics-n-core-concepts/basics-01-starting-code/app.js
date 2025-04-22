const app = Vue.createApp({
  data() {
    return {
      // REMARK: These are properties of object,
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2> Master Vue and build amazing apps! </h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  method: {
    // REMARK: Define functions to execute.
    outputGoal() {
      const randomNumber = Math.random();
      // REMARK: this refers to the global Vue instance objec that are merged from data object and more.
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    }
  },
});

app.mount('#user-goal');