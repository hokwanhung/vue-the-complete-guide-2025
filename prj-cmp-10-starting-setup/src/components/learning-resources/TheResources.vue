<template>
  <base-card>
    <!-- REMARK: When props or event listeners are added on custom components,
   by default they fall through to the root level element in the template.-->
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">StoredResources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <component :is="seletectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  name: 'the-resources',
  data() {
    return {
      seletectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        },
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.seletectedTab === 'stored-resources' ?
        null : 'flat';
    },
    addResButtonMode() {
      return this.seletectedTab === 'add-resource' ?
        null : 'flat';
    }
  },
  methods: {
    setSelectedTab(value) {
      this.seletectedTab = value;
    },
  }
}
</script>