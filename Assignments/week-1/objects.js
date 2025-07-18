function greet(user) {
  console.log("Hey" + " " + user.name + " " + "Your age is" + " " + user.age);
}

let user = {
  name: "chandu",
  age: 22,
};

greet(user);
