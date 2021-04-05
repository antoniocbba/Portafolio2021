// JAVASCRIPT CODE AT THE MOMENT ONLY FOR CONTACT.HTML

// JavaScript for CONTACT.HTML FORM validation of datos 
function validation(){
 
    var name = document.getElementById("name").value;
    var last_name1 = document.getElementById("last_name1").value;
    // line below just in case you want to add telephone 
    //var phone = document.getElementById("phone").value;
    var email1 = document.getElementById("email1").value;
    var message1 = document.getElementById("message1").value;
    // error message var below  
    var error_message = document.getElementById("error_message");
    
    
    // Antonio test part 
    //var pri = name + subject + phone + email + message;
    //alert(pri);
    //   Delete this part ß

    var text;
    error_message.style.padding = "10px";
    //error_message.style.height = "15px";
    //cont.style.height = "100%";
    // controling name value
    if(name.lenght <5 || name === ""){
        text = "Please enter valid Name";
        error_message.innerHTML = text;
        // return false if name is less than 5 characters
        return false;
    }
    // controling subject value menor a 10 charaters 
    if(last_name1.lenght <10 || last_name1 ===""){
        text = "Please Enter Correct Surname"
        error_message.innerHTML = text;
        return false;
    }
    // controling telephone number is menor of 11 digits
    // isNaN = meaning if it is not a number
    /*   Code below in case you want add telephone
    if(isNaN(phone) || phone.lenght > 10 || phone ===""){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    */
    //Controling email has @ character and length is major of 6
    if(email1.indexOf("@") == -1 || email1.lenght < 6 || email1 === ""){
        text = "Please enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(message1.length <= 20 || message1 === ""){
        text = "Please Enter More Than 20 Characteres";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form submitted successfull");
    return true;   



}
