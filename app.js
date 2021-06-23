const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalsValue: '',
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoalsValue);
    }
  }
});

app.mount('#user-goals');
