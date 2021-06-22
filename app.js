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
      setTimeout(this.setZero, 5000);
    }
  },
  computed: {
    result() {
      if (this.number > 37) {
        this.resultMessage = this.message[1];
      } else if (this.number < 37) {
        this.resultMessage = this.message[0];
      } else if (this.number === 37) {
        this.resultMessage = '37';
      }
      return this.resultMessage;
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