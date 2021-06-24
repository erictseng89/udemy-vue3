## props - properties that are passed between apps and components
Props is used to pass data to child components. It is passed from the parent component in
a couple of ways:
1. The first is by adding an attribute to the component tag. The attribute name should be
   the prop name, and the value would be the value that wants to be passed. The on the
   component.vue file, we need to add the 'props' attribute to the root component along
   side 'data' and 'methods'. 
   
   One important thing to note is the name of the attribute in the component tag should be
   in (kebab-case), with dash replacing spaces and no uppercase at all.
   ```html
    <friend-contact
      name="ted"
      phone-number="124124asdfds12"
      email-address="tiny@ted.com"
    ></friend-contact>
   ```

   But in the component.vue file, the same attribute names should be in camelCase.
   ```js
   export default {
    props: ["name", "phoneNumber", "emailAddress"],
   }
   ```
   
   Then we can call these props in template as their props name.
   ```html
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide Details" : "Show Details" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone Number: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
   ```


## Changing prop values
props should not be mutated by the child component. If the child component wants to mutate
the data, they should create a copy of the prop and change that instead. This is because
it violates the uni-directional prop usage pattern. There will be ways to change a prop
and inform the parent component.

If we try to mutate a prop without consideration, there will be a warning;
> error  Unexpected mutation of "isFavourite" prop

## prop properties
The prop attribute can also be an object or even an object of objects instead of an array.
This allows the props that the component receives to have constraints and checks.

prop properties can be used if in a collaboration environment.

- Object
  The prop attribute as an object can type the data it receives and will return a console
  log error if the type is not correct.
  ```js
  props: {
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavourite: Boolean,
  },
  ```

- Object of objects
  The prop attribute can be an object of object, with each nested object an individual
  prop. In this instance the individual prop can have many properties:
  - type : String | Number | Boolean | Array | Object | Date | Function | Symbol
    Will return a console warning if the type-check fails 
  - required: Boolean
    Will return warning if the value is truthy but the prop was not passed
  - default: any
    Specifies a default value for the prop, and will be used if prop is not passed. This
    can also be a callback function that returns a value.
  - validator: Function
    This is a custom function that takes the prop value as its sole argument. Should
    return a Boolean, and if falsy, will return a console warning.

  ```js
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      validator: function(value) {
        return value.strlen > 9 && value.strlen < 15
      }
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  ```
  
## Prop types
By default, all props passed to the child component will be strings.

```html
<friend-contact
  name="ted"
  phone-number="124124asdfds12"
  email-address="tiny@ted.com"
></friend-contact>
```

You can type these props by v-binding the attribute. The phone-number and is-favourite
props would be a number and boolean respectively.
```html
<friend-contact
  name="ted"
  :phone-number="12412129412" 
  email-address="tiny@ted.com"
  :is-favourite="true"
></friend-contact>
```

## Passing objects using v-for
You can pass objects using v-for by using the v-bind="index" attribute.

When using v-for in component templates, a key must be assigned.
Objects are passed as props in 2 ways.

1. We can pass the entire object including the name of the object.

   ```html
   <friend-contact
     v-for="friend in friends"
     :friend = "friend"
     :key="friend.id"
   ></friend-contact>
   ```

1. We can pass the properties of an object, in which no object name is passed, but rather
   the object properties are passed as individual props. This uses the v-bind attribute
   with the object as the value.
   ```html
   <friend-contact
     v-for="friend in friends"
     v-bind="friend"
     :key="friend.id"
   ></friend-contact>
   ```
