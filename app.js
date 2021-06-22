const app = Vue.createApp({
  data() {
    return {
      number: 0,
      message: [
        'Not there yet',
        'Too much!',
      ],
      resultMessage: ''
    }
  },
  watch: {
    resultMessage() {
      setTimeout(this.setZero(), 5000);
    }
  },
  conputed: {
    // result() {
    //   if (this.number === 37) {
    //     this.resultMessage = this.number;
    //   } else if (this.number > 37) {
    //     this.resultMessage = this.message[1];
    //   } else {
    //     this.resultMessage = this.message[0];
    //   }
    //   return this.resultMessage;
    // }
    result() {
      return '100';
    }
  },
  methods: {
    addFive() {
      this.number = this.number + 5;
    },
    addOne() {
      this.number = this.number + 1;
    },
    setZero() {
      this.number = 0;
    },
  }
});

app.mount('#assignment');