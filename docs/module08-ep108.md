## scoped - restricting styling
By default styling the main App.vue will extend to all child components, as well as
overwriting any styling those components will have. In order to prevent parent components
from affecting child components. We can add a 'scoped' attribute to the <style></style>
tag in the component layout. This will restrict the styling to only the current component
and not extend to child components.

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
