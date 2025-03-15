function isValid() {
    if (userName() && userEmail() && userComment())
    return true;
    else
        document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

const form = document.getElementById("myform");

form.addEventListener(
    "blur",
    userName,
    false
);
function userName(){
    var validName = false;

    var userName = document.getElementById("name").value;
    var errorMessages = "";

    if (userName === "null" || userName === ""){
        errorMessages += "<p>Name is required<p>";
        console.log("Name is requried.")
    } else {
        validName = true;
        console.log("Valid name.")
    };

    document.getElementById("uname").innerHTML = errorMessages;

    return(validName);
}

form.addEventListener(
    "blur",
    userEmail,
    false
);
function userEmail(){
    var validEmail = false;

    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var errorMessages = "";

    if (userEmail === "null" || userEmail === ""){
        errorMessages += "<p>Email is required<p>";
        console.log("Email is required.")
    } else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages += "<p>Invalid email, requires '@' and '.(something)'</p>";
        console.log("Email invalid")
    } else {
        validEmail = true;
        console.log("Valid email.")
    };

    document.getElementById("uemail").innerHTML = errorMessages;

    return(validEmail);
}

form.addEventListener(
    "blur",
    userComment,
    false
);
function userComment(){
    var validComment = false;

    var userComment = document.getElementById("comment").value;
    var errorMessages = "";

    if (userComment === "null" || userComment === ""){
        errorMessages += "<p>Comment is required<p>"
        console.log("Comment is required")
    } else {
        validComment = true;
        console.log("Valid comment")
    };

    document.getElementById("ucomment").innerHTML = errorMessages;

    return(validComment);
}
