<template>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails">
    {{ detailsAreVisible ? "Hide Details" : "Show Details" }}
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone Number: </strong>{{ friend.phoneNumber }}</li>
    <li><strong>Email: </strong>{{ friend.email }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      // friends: [
      //   {
      //     id: "jane",
      //     name: "huge jane",
      //     phoneNumber: "1412481902",
      //     email: "tiny@jane.com",
      //   },
      //   {
      //     id: "ted",
      //     name: "tiny ted",
      //     phoneNumber: "1892471894",
      //     email: "tiny@ted.com",
      //   },
      // ],
      friend: {
        id: "ted",
        name: "tiny ted",
        phoneNumber: "1892471894",
        email: "tiny@ted.com",
      },
      detailsAreVisible: true,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>