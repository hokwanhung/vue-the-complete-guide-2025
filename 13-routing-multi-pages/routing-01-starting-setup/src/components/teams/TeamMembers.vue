<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
    <!-- REMARK: This refers to the same link with only dynamic value, so it'll not trigger any change by default. -->
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  name: 'team-members',
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      teamName: 'Test',
      members: [],
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // const teamId = route.params.teamId;
      const selectedTeam = this.teams.find((team) => team.id === teamId);

      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    // this.$route.path // /teams/t1
    // this.loadTeamMembers(this.$route);
    this.loadTeamMembers(this.teamId);

    // REMARK: Query params are only accessible through $route.
    // console.log(this.$route.query);
  },
  beforeRouteUpdate() {
    // REMARK: Whenever this component is to be reused by 
  },
  watch: {
    teamId(newRoute) {
      // $route(newRoute) {
      // REMARK: This can watch the route changes.
      this.loadTeamMembers(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>