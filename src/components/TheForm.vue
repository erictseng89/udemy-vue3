<template>
  <form @submit.prevent="submitForm">
    <div
      class="form-control"
      :class="{ invalid: validate.userName === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <input
        @blur="validateUserName"
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
      />
      <p v-if="validate.userName === 'invalid'">Please enter a valid name</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model.number="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="choose" selected disabled>Choose Referer</option>
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          v-model="interest"
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          v-model="interest"
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          v-model="interest"
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          value="how-video"
          v-model="how"
          id="how-video"
          name="how"
          type="radio"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          value="how-blogs"
          v-model="how"
          id="how-blogs"
          name="how"
          type="radio"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          value="how-blogs"
          v-model="how"
          id="how-other"
          name="how"
          type="radio"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <rating-control v-model="rating"></rating-control>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from "./RatingControl.vue";

export default {
  components: {
    RatingControl,
  },
  data() {
    return {
      userName: "",
      userAge: null,
      referrer: "choose",
      interest: [],
      how: null,
      rating: "poor",
      validate: {
        userName: "pending",
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.rating);
      // console.log(this.interest);
      // console.log(this.how);
    },
    validateUserName() {
      if (this.userName === "") {
        this.validate.userName = "invalid";
      } else {
        this.validate.userName = "valid";
      }
    },
  },
};
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

.form-control.invalid input {
  border-color: red;
}
.form-control.invalid label,
.form-control.invalid p {
  color: red;
}
button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>