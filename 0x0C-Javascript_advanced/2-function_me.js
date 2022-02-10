function welcomeMessage(fullname) {
  return function () {
    alert('Welcome ' + fullname);
  }
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred =  welcomeMessage("Fred");