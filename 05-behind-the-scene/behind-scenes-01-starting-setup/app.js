const app = Vue.createApp({
  data() {
    // REMARK: Ues proxies to wrap properties into reactive data objects.
    // REMARK: Vue would be notified by any changes wrapped.
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
    beforeCreate() { // REMARK: default Vue methods.
      // REMARK: Not even the Vue app will be initialised in this point.
      console.log('beforeCreate()');
    },
    created() {
      // REMARK: Created but still not visible.
      console.log('created()');
    },
    beforeMount() {
      console.log('beforeMount()');
    },
    mounted() {
      // REMARK: Initialised, data processed, and template compiled at this point, so can see the output.
      console.log('mounted()');
    },
    beforeUpdate() {
      console.log('beforeUpdate()');
    },
    updated() {
      // REMARK: The text output is changed here.
      console.log('updated()');
    },
    beforeUnmount() {
      console.log('beforeUnmount()');
    },
    unmounted() {
      // REMARK: Only visibly unmounted here.
      console.log('unmounted()');
    },
  },
});

app.mount('#app'); // REMARK: The #app refers to a template that is mounted by the Vue app.

setTimeout(function () {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <p>{{favouriteMeal}}</p>
  `, // REMARK: Usually not using as it's harder to see the template via String.
  data() {
    return {
      favouriteMeal: 'Pizza',
    }
  }
});

app2.mount('#app2');

// let message = 'Hello!';

// let longMessage = message + 'World!';

// console.log(longMessage);

// message = 'Hello!!!!!';

// // REMARK: Still output 'Hello!World!' because JS by default is not reactive.
// console.log(longMessage);

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!',
};

const handler = {
  // REMARK: Triggered whenever the property is set.
  set(target, key, value) {
    // // the object wrapped
    // console.log(target);
    // // the key of the object
    // console.log(key);
    // // the value of the object
    // console.log(value);
    if (key === 'message') {
      target.longMessage = value + 'World!';
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

// // REMARK: This is updated as the reactive system is built for data.
// console.log(proxy.longMessage);
