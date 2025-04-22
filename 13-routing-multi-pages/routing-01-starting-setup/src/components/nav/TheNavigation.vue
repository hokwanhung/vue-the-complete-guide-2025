<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <button @click="setActivePage('teams-list')">Teams</button> -->
          <!-- REMARK: A special anchor tag that prevent loading a diff page, and anaylse and load the component. -->
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <!-- <button @click="setActivePage('users-list')">Users</button> -->
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'the-navigation',
  // emits: ['set-page'],
  // methods: {
  //   setActivePage(page) {
  //     this.$emit('set-page', page);
  //   },
  // },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
/** REMARK: Active state styling available through vue-router,
while router-link-exact-active only applies to the exact link, ignoring the nested ones. */
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>