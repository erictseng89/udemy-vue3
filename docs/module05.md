## Proxy - how does Vue automatic update
Vue uses 'proxy' objects to render objects dynamically. Proxy is an object (similar to a
class) which is created by taking 2 parameters.

```javascript
const newProxy = new Proxy(object target, object handler);
```
This new 'newProxy' object can access the original object via the handler. If the handler
is an empty object, the 'newProxy' can be considered the same instance to the original
object. Any changes done to the 'newProxy' directly changes the original object and vice
versa. You can also consider that the 'newProxy' wraps around the original object, or
perhaps 'inherits' its properties.

The handler can intercept the 'newProxy' and can redefine the operation. There are various
functions, which are also considered "trap"s that can manipulate the operation.

## set(target, key, value)

```javascript
const user = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'john@doe.com'
};
/**
 * This function will fire whenever the proxy attempts to redefine or "set" a property of the * original object.
 */
const handler = {
  set(target, key, value) {
    console.log(target); // The target is the original object
    console.log(key); // The key is the name of the property that the proxy is setting
    console.log(value); // The value assigned to the property
  }
}
let proxyUser = new Proxy(user, handler);

/**
 * setting a property will call the function.
 */
proxyUser.firstName = 'John';
/**
 * The console log will display the 3 parameters of the set() function which can be 
 * manipulated.
 */
```

This example can show how setting one property of the object can change other properties
of the same object. 
```javascript
const handler = {
  /**
   * When the key 'lastName' is set, then the 'email' property will also change
   */
  set(target, key, value) {
    if (key === 'lastName') {
      target.email = target.email + value;
    };
    target.lastName = value;
  }
};
let proxyUser = new Proxy(user, handler);

proxyUser.lastName = 'Tree';

console.log(proxyUser.email);
```

```javascript
const user = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'john@doe.com'
};
const handler = {
  get(target, property) {
    console.log(`property ${property} has been read.`);
    return target[property];
  }
}
let proxyUser = new Proxy(user, handler);
```

## Templating
When we create and mount a Vue app on a html element. The element's contents become a
template for the vue app.

These 2 are essentially identical for Vue:
```html
<div id="app2">
  <p>{{ message }}</p>
</div>
```
```javascript
const app2 = Vue.createApp({
  data() {
    return {
      message: 'hello',
    }
  }
}).mount('#app2');
```

And:
```html
<div id="app2">

</div>
```
```javascript
const app2 = Vue.createApp({
  template: `
    <p>{{ message }}</p>
    `,
  data() {
    return {
      message: 'hello',
    }
  }
}).mount('#app2');
```

The template is stored as a long string in the vue app.


## Refs - a Vue attribute for an element
ref="user-defined-indentifier"

I guess ref stands for reference? It is a vue attribute that can be added in a vue app.
There are several 'instance properties' of a vue app. They are start with a '$' sign.

There is a $refs property will contain all the DOM elements and ?component instances
registered with the "ref" attribute.

The $refs property simply points to the DOM element or ?component instance.
```html
<input type=text refs="textBox" @click="selectBox">
```
```javascript
methods: {
  selectBox() {
    console.log(this.$refs.textBox);
    console.dir(this.$refs.textBox);
  }
}
```

It can be used to get the value of an object. There are other ways of doing it, but this
is a very simple way in Vue to reference a DOM element.
```html
<input type="text"
  ref="textBox">
<button @click="setText">Set Text</button>
<p>{{ message }}</p>
```

```javascript
methods: {
  setText() {
    this.message = this.$refs.textBox.value;
  }
}
```

## Virtual DOM
The DOM that is rendered in the browser is completely controlled by Vue. Vue will examine
the template, replace all necessary intepolations, remove Vue-specific attributes and
properties that was entered in code and perform that other things I don't know about
befpre spitting out a DOM for the browser. 

One aspect of Vue reactivity is that when a element is changed by Vue, only the specific
element is changed, and nothing else in the Vue app is changed alongside it. This is
achievable because Vue actually has a virtual DOM in memory. Vue has in memory, a
javascript-based DOM which can be quickly read. When a change in the app occurs, Vue will
compare the virtual DOM with the old rendered DOM and only change the specific elements
that require change.

Vue actually doesn't rewrite the virtual DOM on every change. There are many optimisations
that can affect change without creating a new virtual DOM.


## Vue instance lifecycle and lifecycle hooks

The loading of a Vue instance in the browser
1. createApp({...})
  - initiate events and lifecycle
1. beforeCreate()
  - initiate injections & reactivity
1. created()
  - Compile template either from root component or the parent element that is mounted
1. beforeMount()
  - create the DOM elements and prepare to append them to the parent element
1. mounted()

When changes occur
1. mounted Vue instance
1. data change
1. beforeUpdate() 
  - This is where the virtual DOM may be re-rendered
1. updated()
  - The changes are patched to the browser DOM

When unmounting a Vue instance - calling unmount()
1. mouted Vue instance
1. beforeUnmount()
1. unmounted()
When a Vue instance is unmounted, the DOM is removed.

All the above functions that are part of the lifecycle can be called as part of the root
component of a Vue instance. The functions can contain user-added code that is triggered upon
reaching a specific lifecycle, also known as lifecycle 'hooks'


## Root component
The root component is used as the starting point for rendering when the application is
mounted. 