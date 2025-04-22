const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
    };
  },
  computed: {
    fullName() {
      // REMARK: Separate functions with different usages.
      // REMARK: Much shorter than using watchers.
      return (this.name === '' || this.lastName === '') ?
        '' : (this.name + " " + this.lastName);
    },
  }, // REMARK: Computerd properties are like methods but their dependencies are awared.
  watch: {
    //   name(value) {
    //     // REMARK: Whenever name changes, watcher executes.
    //     this.fullName = value === '' ?
    //       '' : (value + ' ' + this.lastName);
    //   },
    //   lastName(value) {
    //     this.fullName = value === '' ?
    //       '' : (this.name + ' ' + value);
    //   },
    counter(value) {
      // REMARK: Watchers are used to check something for a threshold, or HTTP Requests or timers.
      const that = this;
      if (value > 50) {
        setTimeout(() => {
          that.counter = 0;
        }, 1000);
      }

    }
  },
  methods: {
    outputFullName() {
      // REMARK: Separate functions with different usages.
      return this.name === '' ?
        '' : (this.name + " " + "Schwarzmuller");
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      // REMARK: Very native and should be avoided when leveraging Vue.
      // document.querySelector('input').value = '';
      this.name = '';
    }
  }, // REMARK: Should still bind events to method tho.
});

app.mount('#events');
