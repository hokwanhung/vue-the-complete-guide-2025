<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <!-- <h2>{{ user.name }}</h2> -->
    <h2>{{ userName }}</h2>
    <h2>{{ user.age }}</h2>
    <button @click="setAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
      <!-- REMARK: Same way of align-->
      <input type="text" placeholder="Middle Name" ref="lastNameInput" />
      <button @click="setName">Set Middle Name</button>
    </div>
  </section>
</template>

<!-- REMARK: Or to use <script setup /> and treat it similar to React. -->
<script>
// REMARK: reactive is explicitly made for objects.
// eslint-disable-next-line no-unused-vars
import { ref, reactive, isReactive, isRef, toRefs, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const middleName = ref('');
    const middleNameInput = ref(null);
    const uAge = ref(31);

    // REMARK: Accept a key and an actual value (ref).
    provide('userAge', uAge);

    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    }) // REMARK: Computed refs are read-only.

    // REMARK: Watch can pass in single or multiple refs, and then watch them like usual.
    watch([uAge, uName], (newValues, oldValues) => {
      console.log(newValues[0], oldValues[0]);
    });

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

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    function setNewAge() {
      // uAge.value = 32;
      user.value.age = 32;
    }

    function setMiddleName() {
      // REMARK: Cannot use refs because Vue cannot differtiate from ref.
      // middleName.value = this.$refs.lastNameInput.value;
      // REMARK: lastNameInput.value would be the ref, and then the ref also has its value.
      middleName.value = lastNameInput.value.value;
    }

    // REMARK: Put all things to expose to the template.
    // REMARK: This is drilled into as value is a Proxy,
    // thus the values cannot be updated when using user.value.xxx,
    // the reactivity is only known to user - same with reactive.
    return {
      // userName: user.value.name, age: user.value.age, 
      userName: uName,
      user: user, setAge: setNewAge,
      firstName, lastName,
      setFirstName, setLastName,
      lastNameInput,
      setMiddleName,
    };
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
  // },
  // watch: {
  //   age(value) {
  //     console.log(value);
  //   }
  // },
  // provide() {
  //   return {
  //     age: this.age
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