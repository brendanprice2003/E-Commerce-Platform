document.getElementById("registrationForm").addEventListener("submit", function(event) {
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