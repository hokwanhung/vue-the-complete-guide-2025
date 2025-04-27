export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      // id: context.rootGetters.userId, // temporary id before getting from server
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    // REMARK: Async and Await is just like the then() block.
    const response = await fetch(process.env.VUE_APP_BASE_URL + `coaches/${userId}.json`, {
      method: 'PUT', // assume we already have userId,
      body: JSON.stringify(coachData)
    });

    const responseData = await response.json();
    if (!response.ok) {
      // REMARK: Throw to the dispatch to handle.
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(process.env.VUE_APP_BASE_URL + `coaches.json`);

    const responseData = await response.json();

    if (!response.ok) {
      // ...
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };

      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};