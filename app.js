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
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
