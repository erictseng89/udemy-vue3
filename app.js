// const app = Vue.createApp({
//   data() {
//     return {
//       currentUserInput: '',
//       message: 'Vue is great!',
//     };
//   },
//   methods: {
//     saveInput(event) {
//       this.currentUserInput = event.target.value;
//     },
//     setText() {
//       this.message = this.currentUserInput;
//     },
//   },
// });

// const user = {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   email: 'john@doe.com'
// };

// const handler = {
//   set(target, key, value) {
//     if (key === 'lastName') {
//       target.email = target.email + value;
//     };
//     target.lastName = value;
//   }
// };
// let proxyUser = new Proxy(user, handler);

// proxyUser.lastName = 'Tree';

// console.log(proxyUser.email);


const app = Vue.createApp({
  data() {
    return {
      message: 'hello',
    }
  },
  methods: {
    setText() {
      this.message = this.$refs.textBox.value;
    }
  }
}).mount('#app');