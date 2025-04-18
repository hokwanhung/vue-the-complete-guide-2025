const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manual',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        }
      ],
    }
  },
});

// REMARK: Always use multi-words and a dash to prevent clash with official HTML elements.
app.component('friend-contact', {
  // REMARK: Into small, reusable pieces (encapsulated and isolated).
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">{{ isDetailVisible ?
        'Hide' : 'Show' }} Details</button>
      <ul v-if="isDetailVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      isDetailVisible: false,
      friend: {
        id: 'manual',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailVisible = !this.isDetailVisible;
    },
  }
});

// REMARK: Multiple components is better than multiple apps (against SPA),
// because components offer certain communiation merchanisms, while apps are independent.
app.mount('#app');