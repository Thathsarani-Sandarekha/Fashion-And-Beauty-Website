function signupform() {

    titleValidation();
    fnameValidation();
    lnameValidation();
    birthdayValidaion();
    phoneValidation();
    genderValidation();
    emailValidation();
    passwordValidation();
    conformpasswordValidation();
    street1lValidation();
    cityValidation();
    zipValidation();
    countryValidation();
    opt1Validation();
    opt2Validation();
    opt3Validation();
    opt4Validation();
    opt5Validation();
    termValidation();
    
    finalOutput();

}

function fnameValidation() {
    let firstName = document.forms["SignUpForm"].fname.value;

    if(firstName == "") {
        alert("Please enter your first name.")
    } else {
        return true;
    }
    console.log(firstName);
}

function lnameValidation() {
    let lastName = document.forms["SignUpForm"].lname.value;
    
    if(lastName == "") {
        alert("Please enter your last name.")
    } else {
        return true;
    }

    console.log(lastName);
}

function birthdayValidaion() {
    let birthDate = document.forms["SignUpForm"].dateofbirth.value;
    
    if(birthDate == "") {
        alert("Please enter your date of birth.")
    } else {
        return true;
    }

    console.log(birthDate);
}

function phoneValidation() {
    let phone = document.forms["SignUpForm"].phonenumber.value;
    
    if(phone == "") {
        alert("Please enter your telephone number.")
    } else {
        return true;
    }

    console.log(phone);
}

function genderValidation() {
    var valid = false;
    var x = document.forms["SignUpForm"].gender;

    for(var i=0;i<x.length;i++) {
        if(x[i].checked) {
            valid = true;
            break;
        }
    }

    if(valid == "") {
        alert("Please select your gender");
        return false;
    } else {
        return true;
    }

    console.log(x);
}

function titleValidation() {
    var e = document.getElementById("options");
    var optionTitle = e.options[e.selectedIndex].value;
    var optionSelectedIndex = e.options[e.selectedIndex].text;
    if(optionTitle==0) {
        alert("Please select your title.");
        return false;
    } else {
        return true;
    }

    console.log(optionSelectedIndex);
    console.log(optionTitle);
}

function emailValidation() {
    let em = document.forms["SignUpForm"].email.value;
    
    if(em == "") {
        alert("Please enter your email address.");
    } else {
        return true;
    }

    console.log(em);
}

function passwordValidation() {
    let pw = document.forms["SignUpForm"].password.value;
    let confpw = document.forms["SignUpForm"].conformpw.value;

    if (pw == "") {
        alert("Please enter a password.");
    } else {
        return true;
    }
    
    if (confpw == "") {
        alert("Please conform your password.");
    } else {
        return true;
    }
}

function conformpasswordValidation() {
    let pw = document.forms["SignUpForm"].password.value;
    let confpw = document.forms["SignUpForm"].conformpw.value;

    if (pw == confpw) {
        return true;
    } else {
        alert("Conform Password doesn't match with your password.");
        return false;
    }
}

function street1lValidation() {
    let st1 = document.forms["SignUpForm"].street.value;
    
    if(st1 == "") {
        alert("Please enter your Street Address.");
    } else {
        return true;
    }

    console.log(st1);
}

function cityValidation() {
    let cit = document.forms["SignUpForm"].city.value;
    
    if(cit == "") {
        alert("Please enter your City.");
    } else {
        return true;
    }

    console.log(cit);
}

function zipValidation() {
    let zip = document.forms["SignUpForm"].zipcode.value;
    
    if(zip == "") {
        alert("Please enter your Zip/Postal Code.");
    } else {
        return true;
    }

    console.log(zip);
}

function countryValidation() {
    var coun = document.getElementById("cname");
    var optionATitle = coun.options[coun.selectedIndex].value;
    var optionASelectedIndex = coun.options[coun.selectedIndex].text;
    if(optionATitle==0) {
        alert("Please select your Country.");
        return false;
    } else {
        return true;
    }

    console.log(optionASelectedIndex);
    console.log(optionATitle);
}

function opt1Validation() {
    var e1 = document.getElementById("options1");
    var option1Title = e1.options[e1.selectedIndex].value;
    var option1SelectedIndex = e1.options[e1.selectedIndex].text;
    if(option1Title==0) {
        alert("Please select your title.");
        return false;
    } else {
        return true;
    }

    console.log(option1SelectedIndex);
    console.log(option1Title);
}

function opt2Validation() {
    var e2 = document.getElementById("options2");
    var option2Title = e2.options[e2.selectedIndex].value;
    var option2SelectedIndex = e2.options[e2.selectedIndex].text;
    if(option2Title==0) {
        alert("Please select your title.");
        return false;
    } else {
        return true;
    }

    console.log(option2SelectedIndex);
    console.log(option2Title);
}

function opt3Validation() {
    var e3 = document.getElementById("options3");
    var option3Title = e3.options[e3.selectedIndex].value;
    var option3SelectedIndex = e3.options[e3.selectedIndex].text;
    if(option3Title==0) {
        alert("Please select your title.");
        return false;
    } else {
        return true;
    }

    console.log(option3SelectedIndex);
    console.log(option3Title);
}

function opt4Validation() {
    var e4 = document.getElementById("options4");
    var option4Title = e4.options[e4.selectedIndex].value;
    var option4SelectedIndex = e4.options[e4.selectedIndex].text;
    if(option4Title==0) {
        alert("Please select your title.");
        return false;
    } else {
        return true;
    }

    console.log(option4SelectedIndex);
    console.log(option4Title);
}

function opt5Validation() {
    var e5 = document.getElementById("options5");
    var option5Title = e5.options[e5.selectedIndex].value;
    var option5SelectedIndex = e5.options[e5.selectedIndex].text;
    if(option5Title==0) {
        alert("Please select your title.");
        return false;
    } else {
        return true;
    }

    console.log(option5SelectedIndex);
    console.log(option5Title);
}

function termValidation() {
    var t = false;

    if(document.getElementById("terms").checked) {
        t = true;
    }

    if(t) {
        return true;
    } else {
        alert("Please agree to terms and conditions.");
        return false;
    }
}

function finalOutput() {
    if(
        titleValidation() &&
        fnameValidation() &&
        lnameValidation() &&
        birthdayValidaion() &&
        phoneValidation() &&
        genderValidation() &&
        emailValidation() &&
        passwordValidation() &&
        street1lValidation() &&
        cityValidation() &&
        zipValidation() &&
        countryValidation() &&
        opt1Validation() &&
        opt2Validation() &&
        opt3Validation() &&
        opt4Validation() &&
        opt5Validation() == true) {
            alert("Dear " + document.forms["SignUpForm"].fname.value + " " + document.forms["SignUpForm"].lname.value + ", Thank you for using Signing Up with us, the recommended results will be shown in a while.");
        }
}