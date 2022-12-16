
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var message = document.contactForm.message.value;


    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = messageErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");

        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate message

    if (message == "") {
        printError("messageErr", "Please enter the message");
    } else {
        printError("messageErr", "");
        messageErr = false;
    }

    // Validate gender


    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || messageErr) != true) {
        var form = document.getElementById('formid');
        var xhr = new XMLHttpRequest();
        var data = new FormData(form);
        console.log(data);
        xhr.open('POST','https://script.google.com/macros/s/AKfycbyvb5hUmPypoukvFBgtrxC2c4Zkb5Y0HAoUUkJVMTxC2bw8YWOs5RSKQk1C_67mBCvv/exec')

        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                Swal.fire({
                    icon: 'success',
                    title: 'Submit Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();
            }
        }
        //Dont submit the form.
        return false;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',

        })
        return false;
    }
};
