## .component() - Components
A component is a custom HTML element that is similar to a partial in php. It can be
created by calling the .component method. The component method takes 2 parameters:
1. A unique-name for the name of the component. As the component will be used like a
   custom html tag, it is recommended that the component name be multiword so as to not
   class with reserved HTML tag names
1. A root Component very similar to the Vue instance root component. The root component
   should contain the template component and can contain the same components as a a Vue
   instance. It can be thought of as essentially a mini reusable Vue instance. 

Usage:
```js
app.component('multi-word', {
  // rootComponent
  template: `
    HTML IN HERE
  `,
  data() {

  },
  methods: {
    
  }
  });
```

example:
```js
/**
 * Since components do not 'mount' and hence cannot obtain HTML information, they are
 * required to input their own html. In this particular instance, it is better to use
 * the ` symbol for the string.
 */
app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="showFriendDetails">Show Details</button>
    <ul v-if="detailsVisibility">
    <li><strong>Phone: </strong>{{ friend.phoneNumber }}</li>
    <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsVisibility: true,
      friend: {
        name: 'Manuel Lorenz',
        phoneNumber: '01234 5678 991',
        email: 'manuel@localhost.com'
      }
    }
  },
  methods: {
    showFriendDetails() {
      this.detailsVisibility = !this.detailsVisibility;
    }
  }
})
```