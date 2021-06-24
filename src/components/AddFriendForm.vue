<template>
  <form action="" @submit.prevent="addFriend">
    <h2>Add another friend</h2>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div>
      <label for="phoneNumber">Phone Number</label>
      <input type="tel" name="phoneNumber" v-model="phoneNumber" />
    </div>
    <div>
      <label for="emailAddress">Email Address</label>
      <input type="email" name="emailAddress" v-model="emailAddress" />
    </div>
    <div>
      <label for="isFavourite">Add to favourites</label>
      <input
        type="radio"
        name="isFavourite"
        :value="true"
        v-model="isFavourite"
      />
    </div>
    <button type="submit">Add friend!</button>
  </form>
</template>

<script>
export default {
  emits: ["added-friend"],

  data() {
    return {
      name: "",
      phoneNumber: "",
      emailAddress: "",
      isFavourite: false,
    };
  },

  methods: {
    addFriend() {
      this.$emit(
        "added-friend",
        this.name,
        this.phoneNumber,
        this.emailAddress,
        this.isFavourite
      );
    },
  },
};
</script>

<style></style>