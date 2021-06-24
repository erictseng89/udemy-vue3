## new Date().toISOString() - sort-of unique ID
These two functions together return a sort-of-but-not-totally unique string that can be
used as a pseudo ID.

## Removing items from array

These are two different ways of removing elements from an array.

```js
/**
 * The filter method filters then removes the array. This only parses the array once.
 */
deleteFriendWithFilter(id) {
  this.friends = this.friends.filter((friend) => friend.id !== id);
},

/**
 * The findIndex will find the index, pass to splice then rearrange the array. This takes a
 * little bit more processing power.
 */
deleteFriend(id) {
  const friendIndex = this.friends.findIndex((friend) => friend.id === id);
  this.friends.splice(friendIndex, 1);
},
```