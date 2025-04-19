<template>
  <div><!-- REMARK: Use <div> instead of <section>. (from solution) -->
    <active-user :username="username" :age="age"></active-user>
    <user-data @update-user-data="updateData"></user-data>
  </div>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      username: '',
      age: 0,
    };
  },
  methods: {
    updateData(userData) {
      this.username = userData.username;
      this.age = userData.age;
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>