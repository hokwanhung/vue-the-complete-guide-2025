const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      result: "RESULT",
    };
  },
  computed: {
    result() {
      if (value < 37) {
        this.result = "Not there yet";
      } else if (value > 37) {
        this.result = "Too much!";
      } else {
        this.result = 37;
      }
    }
  }, // REMARK: Use computed instead of watch (from solution).
  watch: {
    result() {
      // REMARK: that must be used to point to outside of the function (from solution).
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  }
});

app.mount('#assignment');