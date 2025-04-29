<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { ref, inject, computed } from 'vue';
// REMARK: Hooks or composables are functions that built for composition API.
import { useRoute } from 'vue-router';

export default {
  name: 'product-details',
  props: ['pid'],
  setup(props) {
    const products = inject('products');

    // eslint-disable-next-line no-unused-vars
    const route = useRoute();

    // const title = ref('');
    // const price = ref(null);
    // const description = ref('');

    // REMARK: Without computed, it would have no effects when clicking on the 
    // above router-link.
    const selectedProduct = computed(() =>
      products.value.find((product) =>
        product.id === props.pid)); // or now we can use route.params.pid
    // REMARK: Can also turn the below ones as computed.
    const title = computed(() => selectedProduct.value.title);
    const price = selectedProduct.price;
    const description = selectedProduct.description;

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>