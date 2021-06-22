const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    }
  },
  computed: {
    fullname() {
      console.log('running again');
      if (this.confirmedName === '') {
        return '';
      }
      return `${this.confirmedName} LastName`;
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
      this.name = event.target.value;
    },
    anyMethod(event) {
      alert('no submissions');
    },
    enterName(event) {
      this.confirmedName = event.target.value;
    },
    resetName() {
      this.confirmedName = '';
    },
  }
})

app.mount('#events');