<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!isFormValid">Please enter a valid email and password (must be at least 6 characters long)!</p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  name: 'user-auth',
  data() {
    return {
      email: '',
      password: '',
      isFormValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      return this.mode === 'login' ?
        'Login' : 'Signup';
    },
    switchModeButtonCaption() {
      return this.mode === 'login' ?
        'Signup instead' : 'Login instead';
    }
  },
  methods: {
    async submitForm() {
      this.isFormValid = true;
      if (this.email === '' || !this.email.includes('@') ||
        this.password.length < 6) {
        this.isFormValid = false;
        return;
      }

      this.loading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('signup', actionPayload);
        }

        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
        // REMARK: replace() cannot go back to previous page.
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error.message || 'Failed to authenticate, try later.';
      }

      this.loading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  /* border: 1px solid #ccc; */
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>