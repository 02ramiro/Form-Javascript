//formularios
const form_register = document.querySelector("#form-signup");
const form_login = document.querySelector("#form-login");

//input register
const register_name = document.querySelector("#firstname-register")
const register_lastname = document.querySelector("#lastname-register")
const register_email = document.querySelector("#email-register")
const register_password = document.querySelector("#password-register")

//input login
const login_email = document.querySelector("#email-login")
const login_password = document.querySelector("#password-login")

//Users Database
const db_users = []

//create Users
const createUser = (e) => {
    e.preventDefault();      //avoid web page actualization
    
    //create User
    const user = {
        name: register_name.value,
        lastname: register_lastname.value,
        email: register_email.value,
        password: register_password.value,
    }

    save_User(user)
}

const save_User = (user) => {
    const position = db_users.findIndex((item) => item.name === user.name)

    if (position ===-1) {
        db_users.push(user)
        console.log("User successfully created")

    } else {
        console.log("User with mail: " + user.email, "already exists ")
    }
}

const loginUser = (e) => {
    e.preventDefault();

    //we loof for the email that our user wrote to see if it exist
    const userFound = db_users.find((item) => item.email === login_email.value);
    const messageContainer = document.getElementById("messageContainer");

    // if the email exists...
    if (userFound) {
        if (userFound.password === login_password.value) {
            messageContainer.textContent = "Login successful. Welcome, " + userFound.email + "!";
            messageContainer.className = "message-container success-message";
        } else {                                                                           //check if the passwords are the same
            messageContainer.textContent = "Passwords do not match";
            messageContainer.className = "message-container error-message";
        }
    } else {
        messageContainer.textContent = "User not found";                     //if the email do not exist 
        messageContainer.className = "message-container error-message";
    }
}

form_register.addEventListener("submit",createUser)     //when click the register button, execute the function "createUser"
form_login.addEventListener("submit",loginUser)         //when click the Log in button, execute the function "loginUser"