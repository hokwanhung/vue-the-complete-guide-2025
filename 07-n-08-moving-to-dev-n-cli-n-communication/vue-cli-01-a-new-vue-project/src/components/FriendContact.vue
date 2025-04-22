<template>
  <li>
    <h2>{{ name }} {{ isFavourite ?
      '(Favourite)' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">{{ isDetailsVisible ?
      'Hide' : 'Show' }} Details</button>
    <ul v-if="isDetailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // REMARK: props accept custom properties, and can use in array by default as format.
  // REMARK: Even if props are not defined, the "fall-through" approach let "this.$attrs" to access undefined custom props [IMPORTANT].
  // REMARK: Can use object as props with "v-bind" to shorten the codes [IMPORTANT].
  props: {
    // [
    //   // REMARK: Define as camel-case inside the script, but use dash (kebab-case) in element properties.
    //   'name',
    //   'phoneNumber',
    //   'emailAddress',
    //   'isFavourite',
    // ], 
    id: {
      type: String,
      required: true,
    },
    name: {
      // REMARK: Can provide further details about the props through object.
      // REMARK: Possible types include String, Number, Boolean, Array, Object, Date, Function and Symbol.
      type: String,
      required: true,
    },
    phoneNumber: String,
    emailAddress: String,
    isFavourite: {
      type: Boolean,
      required: false,
      default: false, // can also be a function.
      validator: function (value) {
        return typeof value === 'boolean';
      }
    },
  },
  // REMARK: Recommended instead of required as props.
  // emits: ['toggle-favourite'],
  emits: {
    'toggle-favourite': function (id) {
      // REMARK: This serves as custom validators.
      return !!id;
    },
    'delete': (id) => { return !!id },
  },
  data() {
    return {
      isDetailsVisible: false,
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

      // REMARK: Allow to emit own custom evetn to listen from parent component (always use kebab-case).
      this.$emit('toggle-favourite', this.id);
    },
  }
};
</script>