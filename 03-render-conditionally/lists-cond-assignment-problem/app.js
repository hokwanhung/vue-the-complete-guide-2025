const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      isTasksVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = '';
    },
    toggleTaskVisibility() {
      this.isTasksVisible = !this.isTasksVisible;
    },
  }
});

app.mount('#assignment');