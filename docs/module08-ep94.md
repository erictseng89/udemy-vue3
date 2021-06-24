## component communication
For the child component to communicate to the parent component, we utilize custom events.

## $emit() - instance method
Like $refs, $emit() is scoped to the app instance. Unlike $refs which is a property,
$emit() is a method. 
$emit() creates custom events for a child component. It is called in as a method in the the script of the child component and when called, will pass its arguments to the listening parent component. 

Usage:
```js
app.$emit("name-of-event", args1, ... argsN)
```

This example shows that the "toggleFavourite" method is called, this will trigger the
event to the event listener in the parent component, and causing it to call its own method.
```js
// child component
methods: {
  toggleFavourite() {
    // Should always be kebab-case. This is because the event-listener will be in the
    // template portion of the parent component.
    this.$emit("toggle-friend-favourite", this.id);
  },
}
```

## array.prototype.find()

Array.prototype.find()
find(element, index = null, array = null) => { testing function }

find() returns the value of the first element in the array that satisfies the
provided testing function. The 'element' is any name that represents an
individual element of the array. The 'index' is an optional argument if the index
of the array is required in the testing function. The 'array' is the array in
which to find in, it is not required if the find is called on the array itself.

In this example, the 'friends' array will have individual 'friend' elements. Each
friend element is an object that has an id. In the callback function, the friend.id
is compared to the passed 'friendID'. If the 'id' of that specific 'friend'
matches, find() will return the pointer for that particular friend.id key/pair.
```js
/**
 * The 'emits' attribute should also be declared in the child component's root component.
 */
emits: ["toggle-friend-favourite"],

methods: {
  toggleFavourite(friendID) {
    this.friends.find((friend) => friend.id === friendID);
  },
},
```

## => arrow function

This is a compact function expression that is an alternative to a traditional
function. It has several limitations but is convinient to use for functions that do
contain very few logical statements. 
These are the basic syntax of arrow functions:

One parameter with simple expression, does not require 'return'
```js
param => expression
```
Multiple parameters, with simple expression, does not require 'return'
```js
(param1, paramN) => expression
```
Multi-line statements require body brackets and return
```js
> param => {
  let a = 1;
  return a + param;
}
```
Multiple params require parenthesese
```js
(param1, paramN) => {
  let a = 1;
  return a + param1 + paramN;
}
```

## listening to the emit() event:

The v-on: / @ event listener should be on the child component tag itself. It will then
trigger the method "toggleFavourite"
```html
<friend-contact
  v-for="friend in friends"
  v-bind="friend"
  :key="friend.id"
  @toggle-friend-favourite="toggleFavourite"
></friend-contact>
```
```js
methods: {
  toggleFavourite(friendID) {
    this.friends.find((friend) => friend.id === friendID);
  },
},
```