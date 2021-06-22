/**
 * Create constants for the elements
 */

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

/**
 * Create the add goal function for the click event.
 * 
 * ! inputElement.value  
 * The <input> element has many attributes due to having multiple 'types'. The .value
 * in a type=text is whatever is inside the textbox.
 * 
 * ! liElement.textContent  
 * The textContent of a 'textnode' returns the text inside the node, which includes the
 * <script> and <style> of all its elements. It is different from .innerText as that only returns the human readable text.
 *
 */

function addGoal() {
  const inputValue = inputEl.value;
  const newItem = document.createElement('li');
  newItem.textContent = inputValue;
  listEl.appendChild(newItem);
  inputEl.value = '';
}

/**
 * Create a listener for the button on click. The event should not trigger the function,
 * hence do not add the () at the end of the function.
 */
buttonEl.addEventListener('click', addGoal)


