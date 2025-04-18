<template>
  <li>
    <h2>{{ name }} {{ isFavouriteFriend === '1' ?
      '(Favourite)' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">{{ isDetailsVisible ?
      'Hide' : 'Show' }} Details</button>
    <ul v-if="isDetailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // REMARK: props accept custom properties, and can use in array by default as format.
  props: [
    // REMARK: Define as camel-case inside the script, but use dash (kebab-case) in element properties.
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavourite',
  ],
  data() {
    return {
      isDetailsVisible: false,
      isFavouriteFriend: this.isFavourite,
    }
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleFavourite() {
      // REMARK: Will return error because (unidirectional data flow),
      // data from app should only be changed in app (immutable props).
      // this.isFavourite === '1' ?
      //   this.isFavourite = '0' : this.isFavourite = '1';
      this.isFavouriteFriend === '1' ?
        this.isFavouriteFriend = '0' : this.isFavouriteFriend = '1';
    }
  }
};
</script>