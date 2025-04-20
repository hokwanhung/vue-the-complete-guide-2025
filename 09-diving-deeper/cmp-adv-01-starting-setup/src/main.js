import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

// REMARK: These are the global components that are registered everywhere.
// REMARK: But this might be unclear when the project gets bigger.
// app.component('the-header', TheHeader);

// REMARK: This is used in multiple places as a global component, 
// so it should be registered here.
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
