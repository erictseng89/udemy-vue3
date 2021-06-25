
## Provide / inject
Sometimes you need to pass props or events through unrelated components to their target
components. Using just props and emits we would have to trigger the event as well as pass
the props through all unrelated components. By using Vue's provide/inject function we 
would not have to pass the prop nor trigger events through unrelated components.  

Provide/inject can be thought of as a long-range props, but without the parent component
knowing which component is intended to receive the data. "provide" will be another
attribute of the parent component. There are two ways for the parent
component to "provide" the data.

1. The simple way with hardcoded data. "provide" is simply an object of key/value pairs.
   This method can only provide hard-coded data. This method cannot pass any
   component instance properties such as data or computed.
   ```js
   export default = {
     provide: {
       usernames: [
         'john',
         'jane'
       ]
     }
   }
   ```
1. The second way is for "provide" to be a callback function returning an object. The
   object will contain pointers to the properties of the parent component. This method is
   much better in that allows the data to be dynamic
   ```js
   export default = {
     data() {
       return {
         usernames: [
           'john',
           'jane'
         ]
       },
     },
     provide() {
       return {
         usernames: this.usernames
       }
     }
   }
   ```

## 'inject'
'inject' is done by simply adding the 'inject' as part of the components attribute.
The receiving component will simply 'inject' the key provided from the parent
component. 
```js
export default = {
 inject: ['usernames']
}   
```

## 'provide' with functions 
'provide'can also pass along function pointers. This removes the necessity to pass custom
'emit' events and event listeners from a child component to the parent component through
the components in between.

Once a function has been provided, and the child component has 'inject'ed the pointer. The
child component can simply use the function as if it was their own, and hence they
actually no longer need to 'emit' the function.

```js
provide() {
  return {
    // The 'provide'd function should not be called with (), but is simply passing the
    // pointer.
    injectedName: this.functionName,
  };
},
```

```js
export default {
  inject: ['injectedName']
}
```

Note that the () was not passed, but when the child component uses the function, they will
need to pass tall the necessary parameters.
```html
<div @click="injectedName(params)">
```

## provide/inject disadvantages
The major disadvantage of using provide and injects is that neither has sender/receiver
information. Therefore it can be confusing if there are many provided values and
functions. It is probably a good idea when using provide and inject to specify in commends
regarding the receiver and sender of the values and functions.