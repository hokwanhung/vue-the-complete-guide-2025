const app = Vue.createApp({
  data() {
    return {
      firstOutput: "OUTPUT",
      secondOutput: "OUTPUT",
      secondConfirmedOutput: "OUTPUT",
    };
  },
  methods: {
    showAlert() {
      alert("The button is clicked");
    },
    inputFirstText(event) {
      this.firstOutput = event.target.value;
    },
    inputSecondText(event) {
      this.secondOutput = event.target.value;
    },
    confirmSecondText() {
      this.secondConfirmedOutput = this.secondOutput;
    }
  }
});

app.mount('#assignment');