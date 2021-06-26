## slots - slotted components
Slots is a capability of Vue which is used as a styling wrapper for reused styling
elements. One common usage for slots is for cards. Cards normally would have the same
styling, but not necessarily the same size and the same types of content.

Creating card components that have the slot capability can ensure that the styling is
consistent in the app.

We create a template with either the <slot></slot> or the self closing <slot /> tag. The
slot defines where the main content of the card is placed.
```html
<template>
  <section>
    <slot/>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
```

The other component simply calls the card tag and they will automatically have the styling
of a card.
```html
<template>
  <base-card>
    <div>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </div>
    <p>{{ infoText }}</p>
  </base-card>
</template>
```


## <slot>fallback</slot>
Using the <slot></slot> tag allows for fallback default content. This is useful for
buttons that oftentimes only will read "submit", but will, at other times discard other
text. Then we would <slot>Submit</slot>, which therein would be used as a standard
component.


## named slots multiple slots
You can add multiple slots to a component. This allows for flexibility in the composition
of the slot component and allows it to provide more basic structure to the content.

```html
<template>
  <section>
    <header>
      <slot name="header">Forgot to put header!!</slot>
    </header>
    <slot />
  </section>
</template>
```


## v-slot:name / #name & \<template\>
We then wrap the contents for the named slot in a <template></template> tag. 'template' is
the a default html tag that renders nothing. Here we are using it to inform Vue that this
is where the named slot is. 

We then have to add a v-slot:name attribute to the template tag to inform which named slot
this is for. Everything else outside of named templates would be the default slot. There
can only be 1 default <slot></slot> in the component.

```html
<base-card>
  <template v-slot:header>
    <h3>{{ fullName }}</h3>
    <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
  </template>
  <p>{{ infoText }}</p>
</base-card>
```

The shorthand for v-slot:name is #name.


## v-slot:default default slot
It is recommended that when using slot components that also contain named slots, we should
also use default slots. v-slot:default is a reserved name for the base <slot></slot>. This
will help to make it clear for others and to ensure that we have not forgotten anything.

```html

<base-card>
  <template #header>
    <h3>{{ fullName }}</h3>
    <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
  </template>
  <template #default>
    <p>{{ infoText }}</p>
  </template>
</base-card>
```


## scope
Remember that the scoped styling and data properties of each component remains true when
using slots. Usually a component's properties and methods will be calculated before
sending the contents off in a slot. The original components, styling will also be passed,
but will adhere to the slot components values if there is a conflict.


## $slots instance property
You can access slot contents as arrays by using 'this.$slots'. We can access specific
named slot data by call their name. For some reason, named slots can only be called as
properties, but the default slot can be called as both property and method. The method
would reveal more concisely the contents of the slot. 

```js
const named = this.$slots.name;
const defaultSlot = this.$slots.default();
```


## When no slot content was passed
By default, slot components will render all of their template content even if no content
was passed to the slot. But using the $slots instance property, we can use v-if to inhibit
rendering of affected elements.  If no content was passed for the particular slot, the $slots content would be an empty array.

In this example, the header tag will not render if no data was passed to the named slot.
This is useful in preventing useless elements from being passed to the DOM.
```html
<template>
  <section>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <slot />
  </section>
</template>
```

## Scoped slots
By default, data properties in the slot component cannot be accessed by the component that
uses the slot. A slot can contain some frequently used data that are specific to the slot.
In order to pass the data into the parent component. We can use scoped slots. 

In order to pass a data property of the slot component, it needs to be provided.
```js
<script>
export default {
  data() {
    return {
      names: ["John", "Jane"],
    };
  },
};
</script>
```

We use the v-bind:nameForParent="nameInSlot". It allows it to be passed to the parent when
initially called. 

...v-bind has a lot of functionality.
```html
<template>
  <section>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <slot v-bind:names="names" />
  </section>
</template>
```

## Utilizing scoped slots
To utilize the passed data property, there are 2 ways of using it:

The first is establishing an object to wrap around all of the passed properties. From this
example, we can see that we establish an object name for the passed properties on the
default slot: v-slot:default="slotProps". We then call the properties via the object
"slotProps" to get "slotProps.names".

```html
<base-card>
  <template v-slot:default="slotProps">
    <ul>
      <li v-for="person in slotProps.names" :key="person">{{ person }}</li>
    </ul>
  </template>
</base-card>
```

The second way is to use ES2015 'destructuring' to pull out the specific slot props. We
pull the 'names' data property from the function. 
```html
<base-card>
  <template v-slot:default="{ names, property2, ... }">
    <ul>
      <li v-for="person in names" :key="person">{{ person }}</li>
    </ul>
    <p>{{ property2 }}</p>
  </template>
</base-card>
```

This is useful if the slot component passes a lot of data properties and you want to only
use a few.

## scoped slot shortcut
If there is only a default slot in the slot component, we can reference the data
properties directly inside the tag-name for the slot in the parent component. Since there
is only one, we need to use the <template></template> tags.

```html
<base-card v-slot:default="{ names, property2, ... }">
    <ul>
      <li v-for="person in names" :key="person">{{ person }}</li>
    </ul>
    <p>{{ property2 }}</p>
</base-card>
```