const app = Vue.createApp({
  data() {
    return {
      name: "",
      counter: 0,
      confirmedName: "",
    };
  },
  methods: {
    addCount() {
      this.counter++;
    },
    addCount(num) {
      this.counter += num;
    },
    reduceCount(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      // REMARK: Still can accept default event object from HTML.
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      // REMARK: Prevent the form to be submitted (first way).
      event.preventDefault();
      alert("Submitted");
    },
    confirmInput(event) {
      // REMARK: To only allow name change when user press enter.
      this.confirmName = this.name;
    }
  }
});

app.mount('#events');
