<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ isDetailsVisible ?
      'Hide' : 'Show' }} Details</button>
    <ul v-if="isDetailsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        id: 'manual',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
      methods: {
        toggleDetails() {
          this.isDetailsVisible = !this.isDetailsVisible;
        }
      }
    };
  }
};
</script>