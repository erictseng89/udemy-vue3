const app = Vue.createApp({
  data() {
    return {
      text1: '',
      text2: '',
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      };
    },
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
    alert() {
      alert('alert');
    },
    changeText1(event) {
      this.text1 = event.target.value;
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

app.mount('#assignment');