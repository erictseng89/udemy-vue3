## javascript importing

```js
import { createApp } from 'vue';

/**
 * ! import
 * * import name from './path.filetype'  
 *   There are two options for the name. It can be within curly brackets {name} whcih
 *   specifies an object from the file, or it could be a user-defined name which is used
 *   just for this js file. We can only use the non-bracket name if the file has a export
 *   default function in it's script.  
 * 
 * In this example, the App is used in the createApp() function to create a new vue
 * instance.
 */
import App from './App.vue';
createApp(App).mount('#app');
```

## export default

```vue
<template>
  <h1>Friends Contact Details</h1>
  <ul>
    <li v-for="friend in friends" :key="friend.id">
      <h2>{{ friend.name }}</h2>
      <ul>
        <li><strong>Phone Number: </strong>{{ friend.phoneNumber }}</li>
        <li><strong>Email: </strong>{{ friend.email }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
/**
 * When we create the main App.vue file, we will need to export it and all of it's
 * settings to the main.js file. We do that by using the 'import' and 'export' keywords in
 * vanilla javascript.
 *
 * ! export default
 * This defines this object as the default export object for this file.
 *
 * In this example, the object is the root component of a Vue component/app. It can be
 * exported to a createApp() function.
 */
export default {
  data() {
    return {
      friends: [
        {
          id: "jane",
          name: "huge jane",
          phoneNumber: "1412481902",
          email: "tiny@jane.com",
        },
        {
          id: "ted",
          name: "tiny ted",
          phoneNumber: "1892471894",
          email: "tiny@ted.com",
        },
      ],
    };
  },
};
</script>
```

## components creation
We typically create the components in a /src/components directory. The name of each
component is typically the name of the tag that will be used in Pascal naming
convention(all first letters in words are uppercase).

Importing a component into an app from the main.js file.
```js
/**
 * Importing a component
 */
import FriendContact from './components/FriendContact.vue';

/**
 * Creating the Vue app instance
 */
const app = createApp(App);

/**
 * Adding a new component to the app from the ./components/ directory.
 */
app.component('friend-contact', FriendContact);

/**
 * Mounting the application in the HTML file.
 */
app.mount('#app');

```

## style
Each .vue file has a third section for the styling of the component.