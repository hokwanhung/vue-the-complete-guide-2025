<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some
        survey results first.</p>
      <!-- REMARK: All other cases are handled before this. -->
      <ul v-else>
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  name: 'user-experiences',
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;

      // REMARK: Listen for the fetch results.
      // REMARK: Only contents inside fetch() is async.
      fetch(process.env.VUE_APP_BASE_URL + 'surveys.json').then((response) => {
        if (response.ok) {
          // REMARK: JSON is the de facto standards for transferring data.
          return response.json();
        }
      }).then((data) => {
        this.isLoading = false;

        // REMARK: When the response.json() is completed,
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });
        }

        // REMARK: Only through arrow functions, this can refer to the results in data.
        this.results = results;
      }).catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.error = 'Failed to fetch data - please try again later.';
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>