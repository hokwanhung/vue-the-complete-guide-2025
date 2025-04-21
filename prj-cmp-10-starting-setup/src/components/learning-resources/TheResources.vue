<template>
  <base-card>
    <!-- REMARK: When props or event listeners are added on custom components,
   by default they fall through to the root level element in the template.-->
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">StoredResources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="seletectedTab"></component>
  </keep-alive>
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
      addResource: this.addResource,
      deleteResource: this.removeResource,
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
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };

      this.storedResources.unshift(newResource);
      this.seletectedTab = 'stored-resources';
    },
    removeResource(resId) {
      // REMARK: The provide and inject is reference created in mount,
      // the below new array is not re-referenced to the provide-inject.
      // this.storedResources = this.storedResources.filter((res) =>
      //   res.id !== resId);

      // REMARK: The below method manipulates the original array and thus has no issues.
      const resIndex = this.storedResources.findIndex((res) => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  }
}
</script>