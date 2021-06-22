const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    }
  },
  methods: {
    addCounter(value) {
      this.counter = this.counter + value;
    },
    removeCounter(value) {
      this.counter = this.counter - value;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    anyMethod(event) {
      alert('no submissions');
    },
    enterName(event) {
      this.confirmedName = event.target.value + this.name;
    }

  }
})

app.mount('#events');