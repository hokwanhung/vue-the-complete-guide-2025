export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(process.env.VUE_APP_BASE_URL + `requests/${payload.coachId}.json`, {
      method: 'POST', // add new data
      body: JSON.stringify(newRequest),
    })

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send!');
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequests', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;

    const response = await fetch(process.env.VUE_APP_BASE_URL + `requests/${coachId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.');
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      }

      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
}