<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
    <button @click="setAge">Change age</button>
  </section>
</template>

<!-- REMARK: Or to use <script setup /> and treat it similar to React. -->
<script>
// REMARK: reactive is explicitly made for objects.
// eslint-disable-next-line no-unused-vars
import { ref, reactive, isReactive, isRef, toRefs } from 'vue';

export default {
  setup() {
    // REMARK: ref() create a reference to values,
    // the below creates a reactive string.
    const user = ref({ // must pass an object if with reactive.
      name: 'Maximilian',
      age: 31,
    });
    // const uName = ref('Maximilian');
    // const uAge = ref(31);

    // REMARK: This turns all props in object into refs.
    // const userRefs = toRefs(user);

    // setTimeout(() => {
    //   // uName.value = 'Max';
    //   user.value.name = 'Max';
    //   user.value.age = 32;
    //   // REMARK: Can use user.name and user.age with reactive,
    //   // no extra wrappers for objects.
    // }, 2000);

    function setNewAge() {
      // uAge.value = 32;
      user.age = 32;
    }

    // REMARK: Put all things to expose to the template.
    // REMARK: This is drilled into as value is a Proxy,
    // thus the values cannot be updated when using user.value.xxx,
    // the reactivity is only known to user - same with reactive.
    return { 
      // userName: user.value.name, age: user.value.age, 
      user: user, setAge: setNewAge };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>