const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      listVisibility: true,
    }
  },
  computed: {
    listVisibilityButton() {
      return this.listVisibility ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleListVisibility() {
      this.listVisibility = !this.listVisibility;
    }
  }
});

app.mount('#assignment');
