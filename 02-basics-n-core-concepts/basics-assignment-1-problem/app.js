const app = Vue.createApp({
  data() {
    return {
      name: "hokwanhung",
      age: 24,
      imageUrl: 'https://vuejs.org/'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    }, // from solution
    outputNumber() {
      return Math.random();
    }
  },
});

// REMARK: mount() to the first instance.
app.mount('#assignment');