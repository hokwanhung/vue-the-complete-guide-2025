const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
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
  }
});

app.mount('#events');
