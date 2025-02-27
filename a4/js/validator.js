function isValid() {
    if (firstName() && lastName() && userEmail() && phoneNumber() && userName()
        && passWord() && userAddress() && userState() && userCountry()
        && userZipcode()
    )
    return true;
    else
        document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

const form = document.getElementById("myform");

form.addEventListener(
    "blur",
    firstName,
    false
);
function firstName(){
    //1) Create variable
    var validFirstName = false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";     //Variable for error message if needed

    //3) Do validation
    //Validation for empty, null, or more than 20 characters
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
    //Validation for alpha characters, and allowed characters    
    } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("First name invalid — bad characters")
    //Pass
    } else {
        validFirstName = true;
        console.log("First name valid")
    };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstName);
};

form.addEventListener(
    "blur",
    lastName,
    false
);
function lastName(){
    //1) Create variable
    var validLastName = false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";     //Variable for error message if needed

    //3) Do validation
    //Validation for empty, null, or more than 20 characters
    if (lastname==="null" || lastname==="" || lastname.length > 20 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length")
    //Validation for alpha characters and allowed characters
    } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
        errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("Last name invalid — bad characters")
    //Pass
    } else {
        validLastName = true;
        console.log("First name valid")
    };
    
    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;
    
    //5) return status of each field
    return (validLastName);
};

form.addEventListener(
    "blur",
    userEmail,
    false
);
function userEmail(){
    //1) Create variable
    var validEmail = false;
    
    //2) Read value from HTML
    var userVEmail = document.getElementById("Email").value;
    var atpos = userVEmail.indexOf("@");        //Variable to validate email - @
    var dotpos = userVEmail.lastIndexOf(".");   //Variable to validate email - .
    var errorMessages = "";                     //Variable for error message if needed

    //3) Do validation
    //Validation for ending in -@--.-- where '-' are letters
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userVEmail.length) {
        errorMessages += "<p>Invalid email, requires '@' and '.'</p>";
        console.log("Email invalid")
    //Validation for null or empty input
    } else if (userVEmail==="null" || userVEmail==="") {
        errorMessages += "<p>The email is required and must not be blank or null</p>";
        console.log("Email invalid - blank")
    } else {
        validEmail = true;
        console.log("Email valid")
    };

    //4) If needed, send error message to HTML 
    document.getElementById("email").innerHTML = errorMessages;

    //5) Return status to each field
    return (validEmail);
};

form.addEventListener(
    "blur",
    phoneNumber,
    false
);
function phoneNumber(){
    //1) Create variable
    var validPNumber = false;

    //2) Read value from HTML
    var phone = document.getElementById("PhoneNumber").value;
    var errorMessages = "";     //Variabe for error message

    //3) Do validation
    //Validation for non numbers, null, and blank
    if (isNaN(phone) || phone==="null" || phone==="") {
        errorMessages += "<p>Invalid number Valid number required</p>";
        console.log("Invalid number - not number or null or empty")
    //Validation for max 15 digit length
    } else if (phone.length > 15) {
        errorMessages += "<p>Number must be maxium 15 digits</p>";
        console.log("Invalid number - too long")
    //Pass
    } else {
        validPNumber = true;
        console.log("Valid number")
    };

    //4) Send error message to HTML
    document.getElementById("pnumber").innerHTML = errorMessages;

    //5) Return status of each field
    return (validPNumber);
};

form.addEventListener(
    "blur",
    userName,
    false
);
function userName(){
    //1) Create variable
    var validUserName = false;

    //2) Read value from HTML
    var username = document.getElementById("Username").value;
    var errorMessages = "";     //Variable for error messages

    //3 Do validation
    //Validation for username length
    if (username.length > 12) {
        errorMessages += "<p>Username must be maximum 12 characters</p>";
        console.log("Invalid username - too long")
    //Validation for empty or null input
    } else if (username === null || username === "") {
        errorMessages += "<p>Invalid username Username is required</p>";
        console.log("Invalid username - null/empty")
    //Pass
    } else {
        validUserName = true;
        console.log("Valid username")
    };

    //4) Send error message to HTML
    document.getElementById("username").innerHTML = errorMessages;

    //5) Return status of each field
    return (validUserName);
};

form.addEventListener(
    "blur",
    passWord,
    false
);
function passWord(){
    //1) Create variable
    var validPassWord = false;
    
    //2) Get input from HTML
    var uPassword = document.getElementById("Password").value;
    var errorMessages = "";     //Variable for error message if needed

    //3) Do validation
    // Password length validation
    if (uPassword.length > 7) {
        errorMessages += "<p>Password must be maximum 7 characters long</p>";
        console.log("Invalid password - invalid length")
    // Password null or empty validation
    } else if (uPassword === null || uPassword === "") {
        errorMessages += "<p>Password is required<p>";
        console.log("Invalid password - password required")
    // At least 1 uppercase
    } else if (!/[A-Z]/.test(uPassword)) {
        errorMessages += "<p>Password must contain at least one uppercase letter</p>";
        console.log("Invalid password - at least 1 uppercase character")
    // At least 1 lowercase
    } else if (!/[a-z]/.test(uPassword)) {
        errorMessages += "<p>Password must contain at least one lowercase letter</p>";
        console.log("Invalid password - at least 1 lowercase letter")
    // At least 1 number
    } else if (!/[0-9]/.test(uPassword)) {
        errorMessages += "<p>Password must contain at least one number</p>";
        console.log("Invalid password - at least 1 number")
    // At least 1 special character
    } else if (!/[^A-Za-z0-9]/.test(uPassword)) {
        errorMessages += "<p>Password must contain at least one special character</p>";
        console.log("Invalid password - at least 1 special character")
    // Pass
    } else {
        validPassWord = true;
        console.log("Valid password")
    };

    //4) Send error message to HTML
    document.getElementById("password").innerHTML = errorMessages;

    //5) Return status of each fields
    return (validPassWord);

};

form.addEventListener(
    "blur",
    userAddress,
    false
);
function userAddress() {
    //1) Create variable
    var validUserAddress = false;

    //2) Read input from HTML
    var useraddress = document.getElementById("Address").value;
    var errorMessages = "";     //Error message variable if needed

    //3) Do validation
    //Null or empty input validation
    if (useraddress === null || useraddress === "") {
        errorMessages += "<p>Address is required</p>";
        console.log("Invalid address - required")
    //Pass
    } else {
        validUserAddress = true;
        console.log("Valid address")
    };

    //4) Send error message to HTML
    document.getElementById("address").innerHTML = errorMessages;

    //5) Return status of each field
    return (validUserAddress);

};

form.addEventListener(
    "blur",
    userCity,
    false
);
function userCity() {
    //1) Create variable
    var validUserCity = false;

    //2) Read input from HTML
    var usercity = document.getElementById("City").value;
    var errorMessages = "";     //Error message variable

    //3) Do validation
    //Null or empty input validation
    if (usercity === null || usercity === "") {
        errorMessages += "<p>City is required</p>"
        console.log("Invalid city - blank or null")
    //Pass
    } else {
        validUserCity = true;
        console.log("Valid city")
    };

    //4) Send error message to HTML
    document.getElementById("city").innerHTML = errorMessages;

    //5) Return status of each fields
    return (validUserCity);
    
};

form.addEventListener(
    "blur",
    userState,
    false
);
function userState() {
    //1) Create variable
    var validUserState = false;

    //2) Read input from HTML
    var userstate = document.getElementById("state-select").value;
    var errorMessages = "";     //Error message variable

    //3) Do validation
    //No selection validation
    if (userstate === "") {
        errorMessages += "<p>State required</p>";
        console.log("Invalid state - required")
    //Pass
    } else {
        validUserState = true;
        console.log("Valid state")
    };

    //4) Send error message to HTML
    document.getElementById("state").innerHTML = errorMessages;

    //5) Return status of each field
    return (validUserState);
};

form.addEventListener(
    "blur",
    userCountry,
    false
);
function userCountry() {
    //1) Create variable
    var validUserCountry = false;

    //2) Read input from HTML
    var usercountry = document.getElementById("country-select").value;
    var errorMessages ="";

    //3) Do validation
    //No selection validation
    if (usercountry === "") {
        errorMessages += "<p>Country required</p>";
        console.log("Invalid country - no selection")
    //Pass
    } else {
        validUserCountry = true;
        console.log("Valid country")
    };

    //4) Send error to HTML
    document.getElementById("country").innerHTML = errorMessages;

    //5) Return status of fields
    return (validUserCountry);

};

form.addEventListener(
    "blur",
    userZipcode,
    false
);
function userZipcode() {
    //1) Create variable 
    var validUserZipcode = false;

    //2) Read input from HTML
    var userzipcode = document.getElementById("Zipcode").value;
    var errorMessages = "";     //Error message variable
    var country = document.getElementById("country-select").value;

    //3) Do validation
    //Check validation only if country is United States
    if (country === "United States") {
        //Null and empty input validation
        if (userzipcode === "" || userzipcode === null) {
            errorMessages += "<p>Zipcode is required for United States</p>";
            console.log("Invalid zipcode - USA selection")
        //5 digit length validation
        } else if (userzipcode.length != 5) {
            errorMessages += "<p>Zipcode must be five digits long</p>"
            console.log("Invalid zipcode - not 5 digits")
        //Numerals validation
        } else if (!/[0-9]/.test(userzipcode)) {
            errorMessages += "<p>Zipcode must be in numbers</p>";
            console.log("Invalid zipcode - non numerals")
        //PAss
        } else {
            validUserZipcode = true;
            console.log("Valid zipcode")
        };
    //No validation needed if not United States
    } else {
        validUserZipcode = true;
        console.log("Valid zipcode - none needed")
    };

    //4) Send error to HTML
    document.getElementById("zipcode").innerHTML = errorMessages;

    //5) Return status of fields
    return (validUserZipcode);
};

