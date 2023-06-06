
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // get field data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const log = console.log.bind(console);
    // save details in localstorage
    // this is just a fake system so this should suffice
    let localStorage = window.localStorage;

    // get current accounts and check if the entered details exist
    let accounts = JSON.parse(localStorage.getItem('accounts'));

    // if this obj exists
    if (accounts) {

        // check if specific account exists
        for (let index in accounts) {
            
            let account = accounts[index];
            if ((account.username === username || account.email === username) && account.password === password) {
                localStorage.setItem('user', JSON.stringify(account));
                window.location.href = '/home';
            }
            else {
                document.getElementById('doesnotexist').style.display = 'block';
            };
        };
    }

    // if no account under these details
    else {
        document.getElementById('doesnotexist').style.display = 'block';
    };

});