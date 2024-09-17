function validateform(){


    var Email4 = document.getElementById("Email4").value;
    var Password14 = document.getElementById("Password14").value;
    
    
    var Email4error = document.getElementById("Email4error");
    var Password14error = document.getElementById("Password14error");
    
    var email_check = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/;
    var password_check = /^[a-zA-Z0-9@.]{8,}$/g;


email ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
tel ^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$
pass ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$

postal ^\d{5}(-\d{4})?$

user name ^[a-zA-Z0-9_]{3,16}$

^https?:\/\/[a-zA-Z0-9-._~:\/?#\[\]@!$&'()*+,;=]+$

    if(!email_check.test(Email4)){

        Email4error.innerHTML = "Please enter a valid email";
        return false;
    }

    if(!password_check.test(Password14)){
        Password14error.innerHTML = "Please enter correct password";
        return false;

    }
}