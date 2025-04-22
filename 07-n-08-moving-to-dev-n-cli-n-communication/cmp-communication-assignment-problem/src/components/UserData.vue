<template>
  <form @submit.prevent="submitData">
    <section>
      <div>
        <label>Username</label>
        <input type="text" v-model="enteredUsername" />
      </div>
      <div>
        <label>Age</label>
        <input type="number" v-model="enteredAge" />
      </div>
      <div>
        <button @click="updateData">Update</button>
      </div>
    </section>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredUsername: '',
      enteredAge: '',
    };
  },
  emits: ['update-user-data'],
  methods: {
    updateData() {
      this.$emit('update-user-data', {
        username: this.enteredUsername,
        age: this.enteredAge,
      });
      this.enteredUsername = '';
      this.enteredAge = '';
    }
  }
}
</script>