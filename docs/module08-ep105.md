<!-- TODO Strange function -->
## Some strange function:

```js
classes() {
  return {
    'badge--admin': this.type === 'admin',
    'badge--author': this.type === 'author',
  };
},
```

## Global and Local components

## Global components
Components that are registered in this main.js file are considered to be global
components. They have these properties:
- Global components are availabe everywhere throughout the app, meaning that they can be
  used by any other component in the app. 
- Global components are immediately loaded in the main app. The more global components,
  the more the app will need to load initially.

It is better to have only the absolutely necessary components for the initial render in
the main.js. All other components can be made local.

## Local components
Components can be loaded locally by importing, in the same method as you would in main.js,
then named using the 'components' attribute for the root component. 

The components attribute should be an object, with each key/pair value representing one
component. The key name can be either be in kebab-form, or PascalForm, vue will translate
the PascalForm into kebab-form automatically. The value would be the name from the import.
```js
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    "the-header": TheHeader,
  },
}
```
Using PascalForm allows the tag to be used as a self closing tag. 

```js
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader: TheHeader,
  },
}
```
allows for:
```html
<template>
  <TheHeader />
</template>
```

## Shortening the component name even more
We can shorten the name of the components even more by simply referencing them as the
import name. This is a function of modern day javascript. The component will then also be
available in kebab form in the template.

```js
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
  },
}
```

## PascalForm self closing tags

The components when named in PascalForm in the template can then be self-closing.
```html
<template>
  <TheHeader />
  <BadgeList />
  <UserInfo
    :full-name="activeUser.name"
    :info-text="activeUser.description"
    :role="activeUser.role"
  />
</template>
```