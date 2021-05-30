function passValidation(){
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (pass === cpass) {
        alert("Registration Succesfully Completed!");
    }
    else {
        alert("Registration Unsuccessfull: Passwords do not match!")
    }

}