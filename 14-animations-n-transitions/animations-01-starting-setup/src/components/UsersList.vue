<template>
  <!-- REMARK: DIfferent from <transition />, this group will actually render an element to the DOM for manipulation,
     in our case, we set it as ul. -->
  <transition-group tag="ul" name="user-list">
    <!-- REMARK: Every transitions or animations affect the whole group. -->
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  name: 'users-list',
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.push(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter((userItem) => userItem !== user);
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list.move {
  /** REMARK: This dictates how the other elements move. */
  transition: transform 0.8s ease;
}
</style>