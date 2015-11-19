var steven = {
  name: "Steven",
  friends: ["Jeff", "Josh", "Joe"],
  displayFriends(){
    console.log("Listing friends for " + this.name);
    this.friends.forEach((friend) => {
      console.log(`${friend} is friends with ${this.name}`);
    })
  }
}
steven.displayFriends();