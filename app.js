const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          name: 'Manuel Lorenz',
          phoneNumber: '01234 5678 991',
          email: 'manuel@localhost.com'
        },
        {
          name: 'Julie Jones',
          phoneNumber: '09876 543 221',
          email: 'julie@localhost.com'
        }
      ]
    }
  }
})

app.component('friend-contact', {
  /**
   * Since components do not 'mount' and hence cannot obtain HTML information, they are
   * required to input their own html. In this particular instance, it is better to use
   * the ` symbol for the string.
   */
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="showFriendDetails">Show Details</button>
    <ul v-if="detailsVisibility">
    <li><strong>Phone: </strong>{{ friend.phoneNumber }}</li>
    <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsVisibility: true,
      friend: {
        name: 'Manuel Lorenz',
        phoneNumber: '01234 5678 991',
        email: 'manuel@localhost.com'
      }
    }
  },
  methods: {
    showFriendDetails() {
      this.detailsVisibility = !this.detailsVisibility;
    }
  }
})

app.mount('#app')