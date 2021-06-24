<template>
  <h2>{{ name }} {{ friendIsFavourite ? "(Favorite)" : "" }}</h2>
  <button @click="toggleDetails">
    {{ detailsAreVisible ? "Hide Details" : "Show Details" }}
  </button>
  <button @click="toggleFavourite">Toggle favourite</button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone Number: </strong>{{ phoneNumber }}</li>
    <li><strong>Email: </strong>{{ emailAddress }}</li>
  </ul>
  <!-- <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails">
    {{ detailsAreVisible ? "Hide Details" : "Show Details" }}
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone Number: </strong>{{ friend.phoneNumber }}</li>
    <li><strong>Email: </strong>{{ friend.email }}</li>
  </ul> -->
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      validator: function (value) {
        return value.length > 9 && value.length < 15;
      },
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      detailsAreVisible: true,
      friendIsFavourite: this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.friendIsFavourite = !this.friendIsFavourite;
    },
  },
};
</script>