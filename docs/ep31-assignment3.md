```javascript
/**
 * You can watch computed properties as well as data properties. Use the const that =
 * this trick to use 'this' in nested functions.
 */
watch: {
  result() {
    const that = this;
    setTimeout(() => {
      that.number = 0;
    }, 5000);
  }
},
```