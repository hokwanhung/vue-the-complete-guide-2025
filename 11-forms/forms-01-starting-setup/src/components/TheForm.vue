<template>
  <form @submit.prevent="submitForm">
    <!-- REMARK: refs are better for reading data once, without modifications and others. -->
    <div class="form-control" :class="{ invalid: usernameValidity === 'invalid' }">
      <label for="user-name">Your Name</label>
      <!-- REMARK: There's also sub-methods in v-model like lazy, number and trim. -->
      <input id="user-name" name="user-name" type="text" v-model.trim="username" @blur="validateInput" />
      <p v-if="usernameValidity === 'invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <!-- REMARK: Even it seems like number, the type would be string with ref. -->
      <!-- REMARK: v-model will auto detects the number as type number and will convert. -->
      <input id="age" name="age" type="number" v-model="age" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <!-- REMARK: Use empty arrays for checkbox. -->
      <!-- REMARK: Also have to set values to assign values for Vue to add/remove. -->
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <!-- REMARK: Single checkbox returns true or false. -->
      <input type="checkbox" id="confirm-terms" name="confirm-terms" v-model="confirm" />
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <!-- REMARK: Vue supports v-model on custom components. -->
      <rating-control v-model="rating"></rating-control>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';

export default {
  components: {
    RatingControl,
  },
  name: 'the-form',
  data() {
    return {
      username: '',
      // REMARK: To be clear that it has no value yet.
      userAge: null,
      referrer: '',
      interest: [],
      how: null,
      confirm: false,
      usernameValidity: 'pending',
      rating: null,
    }
  },
  methods: {
    submitForm() {
      this.username = '';
      this.age = null;
      this.referrer = 'wom'; // reset back to 'word of mouth'.
      this.interest = [];
      this.how = null;
      this.confirm = false;
      this.rating = null;
    },
    validateInput() {
      this.username === '' ?
        this.usernameValidity = 'invalid' : this.usernameValidity = 'valid';
    }
  }
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: rgb(131, 99, 99);
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox']+label,
input[type='radio']+label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>