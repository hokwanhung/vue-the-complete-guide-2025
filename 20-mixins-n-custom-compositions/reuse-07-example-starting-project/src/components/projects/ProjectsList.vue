<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, toRefs, watch } from 'vue';

import useSearch from '../../hooks/search';
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props) {
    const { user } = toRefs(props);

    // REMARK: The props.user is not selected initially and will return error,
    // use computed() to keep track with the user change.
    // REMARK: user compared to props.user re-evaluate less usually.
    const projects = computed(() => user.value ?
      user.value.projects : []);

    // const enteredSearchTerm = ref('');
    // const activeSearchTerm = ref('');

    // const availableProjects = computed(function () {
    //   if (activeSearchTerm.value) {
    //     return props.user.projects.filter((prj) =>
    //       prj.title.includes(activeSearchTerm.value)
    //     );
    //   }
    //   return props.user.projects;
    // });

    const { enteredSearchTerm, availableItems, updateSearch } =
      useSearch(projects, 'title');

    const hasProjects = computed(function () {
      return user.value.projects && availableItems.value.length > 0;
    });

    // watch(enteredSearchTerm, function (newValue) {
    //   setTimeout(() => {
    //     if (newValue === enteredSearchTerm.value) {
    //       activeSearchTerm.value = newValue;
    //     }
    //   }, 300);
    // });

    // const propsWithRefs = toRefs(props);
    // const user = propsWithRefs.user;

    watch(user, function () {
      // REMARK: Change the refs passing to this component should be avoided.
      // enteredSearchTerm.value = '';
      updateSearch('');
    });

    // function updateSearch(val) {
    //   enteredSearchTerm.value = val;
    // }

    return {
      enteredSearchTerm,
      availableProjects: availableItems,
      hasProjects,
      updateSearch,
    };
  },
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //   };
  // },
  // computed: {
  //   hasProjects() {
  //     return this.user.projects && this.availableProjects.length > 0;
  //   },
  //   availableProjects() {
  //     if (this.activeSearchTerm) {
  //       return this.user.projects.filter((prj) =>
  //         prj.title.includes(this.activeSearchTerm)
  //       );
  //     }
  //     return this.user.projects;
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   },
  //   user() {
  //     this.enteredSearchTerm = '';
  //   },
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>