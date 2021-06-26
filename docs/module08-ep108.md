## scoped - restricting styling
By default, styling with the <style></style> is global by all components. Just like a
vanilla stylesheet, the nature of the cascading style is that if there are conflicts, the
later style will overwrite the former style. This means that in the event of a conflict
global styles in the lower level child components will overwrite the styles from the main
components.

We can add a 'scoped' attribute to the <style></style> tag in the component layout. This
will restrict the styling to only the current component and not overwrite other
components.

```html
<style scoped>
header {
  background-color: red;
}
</style>
<!-- 
  You can have both scoped and unscoped styling in the layout. This allows for a unified style whilst also allowing for components to have their own specific styling.
 -->
<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
```

Vue implements scoped styling by adding unique class names to the html tags. Vue adds a
class "data-v-12345678" where the 8 numbers are 0x hexadecimals.
