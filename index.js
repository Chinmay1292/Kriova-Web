function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}

function myFunction(){
    var x = document.getElementById("myInput");
    if(x.type=="password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}