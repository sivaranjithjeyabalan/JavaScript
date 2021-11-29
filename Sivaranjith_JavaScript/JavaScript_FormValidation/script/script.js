function Name()
{
    var uname=document.getElementById("username").value;
    var regExName=/^([a-z A-Z]+)$/
    if(regExName.test(uname)==false)
    {
        document.getElementById("nameLabel").innerHTML="invalid";
        document.getElementById("nameLabel").style.visibility="visible";
        document.getElementById("nameLabel").style.color="red";
        username.style.border="2px solid red";
    }
    else if(regExName.test(uname)=="")
    {
        document.getElementById("nameLabel").innerHTML="Name required";
        document.getElementById("nameLabel").style.visibility="visible";
        document.getElementById("nameLabel").style.color="red";
        username.style.border="2px solid red";
       
    }
    
    else if(regExName.test(uname))
    {
        document.getElementById("nameLabel").innerHTML="valid";
        document.getElementById("nameLabel").style.visibility="visible";
        document.getElementById("nameLabel").style.color="green";
        username.style.border="2px solid green";
    
    }
}
function FatherName()
{
    var fname=document.getElementById("fathername").value;
    var regExfName=/^([a-z A-Z]+)$/
     if(regExfName.test(fname)==false)
    {
        document.getElementById("fnameLabel").innerHTML="invalid";
        document.getElementById("fnameLabel").style.visibility="visible";
        document.getElementById("fnameLabel").style.color="red";
        fathername.style.border=" solid 2px red";  
    }
    else if(regExfName.test(fname)=="")
    {
        document.getElementById("fnameLabel").innerHTML="Father's name require";
        document.getElementById("fnameLabel").style.visibility="visible";
        document.getElementById("fnameLabel").style.color="red";
        fathername.style.border=" solid 2px red";
       
    }
   
    else if(regExfName.test(fname)){
        document.getElementById("fnameLabel").innerHTML="valid";
        document.getElementById("fnameLabel").style.visibility="visible";
        document.getElementById("fnameLabel").style.color="green";
        fathername.style.border=" solid 2px green";  
    }
}
function EmailValidate()
{
    var uEmail = document.getElementById("email_id").value;
    var regExE=/^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]+)\.([a-z]{2,10})(.[a-z]{2,10})?$/
    if(regExE.test(uEmail))
    {
        
        document.getElementById("emailLabel").innerHTML="Valid";
        document.getElementById("emailLabel").style.visibility="visible";
        document.getElementById("emailLabel").style.color="green";
        email_id.style.border=" solid 2px green";
    }
    else if(regExE.test(uEmail)==false)
    {
        
        document.getElementById("emailLabel").innerHTML="invalid";
        document.getElementById("emailLabel").style.visibility="visible";
        document.getElementById("emailLabel").style.color="red";
        email_id.style.border=" solid 2px red";
    }   
    else if(regExE.test(uEmail)=="")
    {
        document.getElementById("emailLabel").innerHTML="Email id required";
        document.getElementById("emailLabel").style.visibility="visible";
        document.getElementById("emailLabel").style.color="red";
        email_id.style.border=" solid 2px red";
    }
}

function MobileNoValidate()
{
    var mobileNumber=document.getElementById("mobile").value;
    var regExM=/^[7-9][0-9]{9}$/
     if(regExM.test(mobileNumber)==false){
        document.getElementById("mobileLabel").innerHTML="Invalid";
        document.getElementById("mobileLabel").style.visibility="visible";
        document.getElementById("mobileLabel").style.color="red";
        mobile.style.border="2px solid red";
     }
     else if(regExM.test(mobileNumber)==""){
        document.getElementById("mobileLabel").innerHTML="Mobile no required";
        document.getElementById("mobileLabel").style.visibility="visible";
        document.getElementById("mobileLabel").style.color="red";
        mobile.style.border="2px solid red";
    }
    else if(regExM.test(mobileNumber))
    {
        document.getElementById("mobileLabel").innerHTML="valid";
        document.getElementById("mobileLabel").style.visibility="visible";
        document.getElementById("mobileLabel").style.color="green";
        mobile.style.border="2px solid green";
    }
   

}
function ZipValidate()
{
    var pin=document.getElementById("zip").value;
    var regExP=/^[0-9]{6}$/;
    if(regExP.test(pin))
    {
        document.getElementById("pinLabel").innerHTML="valid";
        document.getElementById("pinLabel").style.visibility="visible";
        document.getElementById("pinLabel").style.color="green";
        zip.style.border="2px solid green";
    }
    else if(regExP.test(pin)=="")
    {
        document.getElementById("pinLabel").innerHTML="Pin no required";
        document.getElementById("pinLabel").style.visibility="visible";
        document.getElementById("pinLabel").style.color="red";
        zip.style.border="2px solid red";
    }
    else{
        document.getElementById("pinLabel").innerHTML="Invalid";
        document.getElementById("pinLabel").style.visibility="visible";
        document.getElementById("pinLabel").style.color="red";
        zip.style.border="2px solid red";
    }
}
function DateOfBirthValidate()
{
 var dateOf=document.getElementById("dob").value;
 var regExDate=/^([0-3]{1}[0-9]{1})-([0-1]{1}[0-9]{1})-([1]{1}[0-9]{1}[0-9]{1}[0-9]{1})$/;
 if(regExDate.test(dateOf)=="false")
 {
    document.getElementById("dateLabel").innerHTML="Invalid";
    document.getElementById("dateLabel").style.visibility="visible";
    document.getElementById("dateLabel").style.color="red";
    dob.style.border="2px solid red";
 }
 else if(regExDate.test(dateOf)=="")
 {
    document.getElementById("dateLabel").innerHTML="dob is required";
    document.getElementById("dateLabel").style.visibility="visible";
    document.getElementById("dateLabel").style.color="red";
    dob.style.border="2px solid red";
 }
 else{
    document.getElementById("dateLabel").innerHTML="valid";
    document.getElementById("dateLabel").style.visibility="visible";
    document.getElementById("dateLabel").style.color="green";
    dob.style.border="2px solid green";
 }
 
 
}

function RequiredFields()
{
    var city=document.getElementById("cityName").value;
    var regExCity =/^([a-z A-Z]+$)/
    if(regExCity.test(city)=="")
    {
        document.getElementById("cityLabel").innerHTML="city name is required";
        document.getElementById("cityLabel").style.visibility="visible";
        document.getElementById("cityLabel").style.color="red";
        cityName.style.border="2px solid red";
    }
    else if(regExCity.test(city)==false)
    {
        document.getElementById("cityLabel").innerHTML="city name invalid";
        document.getElementById("cityLabel").style.visibility="visible";
        document.getElementById("cityLabel").style.color="red";
        cityName.style.border="2px solid red";
    }
    else{
        document.getElementById("cityLabel").innerHTML="valid";
        document.getElementById("cityLabel").style.visibility="visible";
        document.getElementById("cityLabel").style.color="green";
        cityName.style.border="2px solid green";
    }
    var Address=document.getElementById("perAdd");
    if(Address.value=="")
    {
        document.getElementById("perAddLabel").innerHTML="Address required";
        document.getElementById("perAddLabel").style.visibility="visible";
        document.getElementById("perAddLabel").style.color="red";
        perAdd.style.border="2px solid red";
    }
    else{
        document.getElementById("perAddLabel").innerHTML="Valid";
        document.getElementById("perAddLabel").style.visibility="visible";
        document.getElementById("perAddLabel").style.color="green";
        perAdd.style.border="2px solid green";
    }
    
}
function CheckBox()
{
    var a = document.getElementById("check");
    if(a.checked==true)
    {
        document.getElementById("perAdd").value=document.getElementById("curAdd").value;
    }
    else{
        document.getElementById("perAdd").value=document.getElementById("perAdd").value;
    }
}
