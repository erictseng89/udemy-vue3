<template>
  <header>Friends Contact Details</header>
  <section>
    <ul>
      <li>
        <friend-contact
          v-for="friend in friends"
          v-bind="friend"
          :key="friend.id"
          @toggle-friend-favourite="toggleFavourite"
          @delete-friend="deleteFriendWithFilter"
        ></friend-contact>
      </li>
      <li>
        <add-friend-form @added-friend="addFriend"></add-friend-form>
      </li>
    </ul>
  </section>
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
          emailAddress: "tiny@jane.com",
          isFavourite: true,
        },
        {
          id: "ted",
          name: "tiny ted",
          phoneNumber: "1892471894",
          emailAddress: "tiny@ted.com",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    /**
     * ! Array.prototype.find()
     * * find(element, index = null, array = null) => { testing function }
     *   find() returns the value of the first element in the array that satisfies the
     *   provided testing function. The 'element' is any name that represents an
     *   individual element of the array. The 'index' is an optional argument if the index
     *   of the array is required in the testing function. The 'array' is the array in
     *   which to find in, it is not required if the find is called on the array itself.
     *
     * In this example, the 'friends' array will have individual 'friend' elements. Each
     * friend element is an object that has an id. In the callback function, the friend.id
     * is compared to the passed 'friendID'. If the 'id' of that specific 'friend'
     * matches, find() will return the pointer for that particular friend.
     */
    toggleFavourite(friendID) {
      const selectedFriend = this.friends.find(
        (friend) => friend.id === friendID
      );
      selectedFriend.isFavourite = !selectedFriend.isFavourite;
    },
    addFriend(name, phoneNumber, emailAddress, isFavourite) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
        isFavourite: isFavourite,
      };
      this.friends.push(newFriend);
    },
    deleteFriendWithFilter(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
    deleteFriend(id) {
      const friendIndex = this.friends.findIndex((friend) => friend.id === id);
      this.friends.splice(friendIndex, 1);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>