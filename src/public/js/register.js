document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const email = document.getElementById("email").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  // Validate password confirmation
  if (password !== confirmPassword) {
    alert("Password and Confirm Password do not match.");
    return;
  }

  // save details in localstorage
  // this is just a fake system so this should suffice
  let localStorage = window.localStorage;

  // get current accounts and check if the entered details exist
  let accounts = JSON.parse(localStorage.getItem('accounts'));

  // if this obj exists
  if (accounts) {
    
    // if specific account exists
    for (let index in accounts) {
      
      let account = accounts[index];

      if (account.username === username && account.password === password) {
        // add account
        localStorage.setItem('user', JSON.stringify(account));
      }
      else {
        let len = Object.keys(accounts).length + 1;
        accounts[len] = {
          username: username,
          password: password,
          email: email,
          fname: firstName,
          lname: lastName
        };
        localStorage.setItem('accounts', JSON.stringify(accounts));
      };
    };
  }

  // if no accounts exist
  else {
    accounts = {};
    let len = Object.keys(accounts).length + 1;
    accounts[len] = {
      username: username,
      password: password,
      email: email,
      fname: firstName,
      lname: lastName
    };
    localStorage.setItem('accounts', JSON.stringify(accounts));
  };
  window.location.href = '/login';

  // Prepare the data to be sent
  const data = {
    username: username,
    password: password,
    email: email,
    firstName: firstName,
    lastName: lastName
  };

  // Make a POST request to the backend API
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Handle the response from the server
      // Reset the form if needed
      document.getElementById("registrationForm").reset();
    })
    .catch(error => {
      console.error(error); // Handle any error that occurred
    });
});