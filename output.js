"use strict";

var steven = {
  name: "Steven",
  friends: ["Jeff", "Josh", "Joe"],
  displayFriends: function displayFriends() {
    var _this = this;

    console.log("Listing friends for " + this.name);
    this.friends.forEach(function (friend) {
      console.log(friend + " is friends with " + _this.name);
    });
  }
};
steven.displayFriends();
