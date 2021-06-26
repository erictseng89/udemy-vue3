## Dynamic components
In this example, we create buttons which determines which component to display. This is
similar to a tab function. 

```html
<script>
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectGoals: "active-goals",
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectGoals = cmp;
    },
  },
};
</script>
```

```html
<template>
  <div>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <active-goals v-if="selectGoals === 'active-goals'"></active-goals>
    <manage-goals v-if="selectGoals === 'manage-goals'"></manage-goals>
  </div>
</template>
```
If there are many tabs or buttoms, we would need to create many v-if elements. This can be
solved by using the \<component\>


## \<component\> component element
This is a Vue specific element that utilizes a specific "is=''" attribute. This element
can be thought of as a placeholder for another component. In this example, we can replace
the v-if components with a component element.

```html
<template>
<div>
  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <component :is="selectGoals" />
</div>
</template>
```

The :is="component-name", or v-bind:is="component-name". Remeber that the component name
must be in kebab case as this will be converted into a html tag name.

## \<keep-alive\>
By default, the component that is no longer shown when the :is value is changed, is
removed from the DOM, along with any user inputs that may have been on it. In order to
create a user-friendly tab effect where user input will not be removed upon switching
tabs, we use the keep-alive element.

In this example, the input data will be cleared whenever we switch away from this tab.
```html
<template>
  <h2>ManageGoals</h2>
  <input type="text" />
</template>
```

To prevent the data from been cleared, we need to cache the component using keep-alive

```html
<keep-alive>
  <component :is="selectGoals" />
</keep-alive>
```
This will cache any components that were switched out.

## Custom alert boxes
We can create custom alert modals as a component.

```html
<template>
  <dialog open>
    <slot />
  </dialog>
</template>

<script>
export default {};
</script>

<style>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
</style>
```
We can then customize the alert with custom content, then call this component with v-if
attributes whenever we need to issue a modal alert.

```html
<error-alert v-if="inputIsInvalid">
  The input is invalid.
  <button @click="inputIsInvalid = false">
    I acknowldge this grave mistake
  </button>
</error-alert>
```

## Teleport \<teleport\>
Normally components and elements are restricted to rendering components and slots to
within their own template layout. This can be a problem for certain types of elements such
as modals where you would prefer to render in the root body or main element. We can use
the teleport component to inform Vue to render a particular component somewhere else.

Teleport takes on attribute "to" in which the value should be a css selector. The contents
that the teleport tag wraps around would be appended to the selected element. 

```html
<teleport to="css-selector">
  <div>To be teleported</div>
</teleport>
```

This example will teleport the error-alert modal to the body element.
```html
<template>
  <h2>ManageGoals</h2>
  <input type="text" ref="input" />
  <button @click="setGoal">Submit</button>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      The input is invalid.
      <button @click="inputIsInvalid = false">
        I acknowldge this grave mistake
      </button>
    </error-alert>
  </teleport>
</template>
```