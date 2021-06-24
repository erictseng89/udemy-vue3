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
