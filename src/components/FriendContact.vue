<template>
  <h2>{{ name }} {{ isFavourite ? "(Favorite)" : "" }}</h2>
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
  /**
   * The 'emits' attribute should also be declared in the child component's root component.
   */
  emits: ["toggle-friend-favourite"],
  props: {
    id: {
      type: String,
      required: true,
    },
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
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      // Should always be kebab-case. This is because the event-listener will be in the
      // template portion of the parent component.
      this.$emit("toggle-friend-favourite", this.id);
    },
  },
};
</script>