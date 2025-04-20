<template>
  <div>
    <!-- <TheHeader /> -->
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
  </div>
  <course-goals #default="slotProps">
    <!-- REMARK: By default all props are inside slotProps, and it doesn't have to be specified. -->
    <!-- <template #default="slotProps"> -->
    <h2>{{ slotProps.item }}</h2>
    <!-- <p>{{ slotProps['another-prop'] }}</p> -->
    <p>{{ slotProps.anotherProp }}</p> <!-- in my case it becomes camelCase by default. -->
    <!-- </template> -->
  </course-goals>
</template>

<script>
import BadgeList from './components/BadgeList.vue';
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  // REMARK: This way we register the components locally.
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    // 'the-header': TheHeader, // or TheHeader as key
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<!-- REMARK: Styles that affect the entire app,
 should define here because App.vue is the entry point. -->
<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>