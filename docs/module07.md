## Vue CLI
Installing Vue CLI with
```bash
> npm install -g @vue/cli
```
Where the -g means 'globally'. This adds 'vue' to PATH. We can then create a new vue app with:
```bash
> vue create app-name
```
This creates a folder in the currently directory with the vue app. You can create the
project in the current directory with:
```bash
> vue create.
```
You then choose either default Vue2, default Vue3, or manual installation.

## Default Vue app
The default Vue CLI app will include several configuration files for eslintc, bable, npm
package.json and package-lock.json. The package.json will include the basic configuration
for the app.

This will install all the packages inside package.json.
```bash
> npm install
```
There are several folders that will be installed:
- node_modules
  The node_modules contain all the dependencies for the complete Vue app.
- src
  Contains all the actual source code files for our app which we will edit
- public
  Contains simply the icon and the index.html. Vue will only create one page initially.
  
## Vue app files
- main.js
  This is the main file that imports the main Vue app. It will import the createVue
  function from the Vue source code file. It will also automatically import our Vue app
  source code files. Finally it will automatically mount the Vue app on the index.html
  file in the public folder.

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

There is also a App.vue file

## .vue files
- Layout
  .vue files typically have three sections:
  1. Template - template for this app component
  1. Script - js script for this app component
  1. Style - css styling for this app component

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```



## Vetur - The recommended Vue extension for vscode
Vetur provides syntax and semantic highlighting, linting, formatting, intellisense and
other functions.

