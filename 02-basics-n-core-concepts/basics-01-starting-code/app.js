const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  method: {
    // REMARK: Define functions to execute.
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? 'Learn Vue!' : 'Master Vue!';
    }
  },
});

app.mount('#user-goal');