function formValidation(){
    // var name=fname.value;
    // var email=mail.value;
    // var age=ag.value;
    // var phone=phn.value;
    var name=document.getElementById("fname").value;
    var email=document.getElementById("mail").value;
    var age=document.getElementById("ag").value;
    var phone=document.getElementById("phn").value;

    // console.log(name);
    // console.log(email);
    // console.log(age);
    // console.log(phone);
    var regx=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var agex=/^([0-9]+)$/;
    if(name==''){
        document.getElementById("invalid-name").innerHTML="*Name Required";
        return false;
    }
    else{
        document.getElementById("invalid-name").innerHTML="";
    }

    if(email==''){
        document.getElementById("invalid-email").innerHTML="*Email Required";
        return false;
    }
    else{
        if(!regx.test(email)){
            document.getElementById("invalid-email").innerHTML="*Invalid Email";
            return false
            
        }
        else{
            document.getElementById("invalid-email").innerHTML="";
        }
        
    }

    if(age==''){
        document.getElementById("invalid-age").innerHTML="*Age Required";
        return false;
    }

    
    else{
        if((age<0)|(age>110)){
            document.getElementById("invalid-age").innerHTML="*Invalid Age";
             return false;

        }
        else if(!agex.test(age)){
            document.getElementById("invalid-age").innerHTML="*Invalid Age";
            return false;
        }
        
        else{
            document.getElementById("invalid-age").innerHTML="";
        }
    }

    var phonx=/^[+][9][1]([0-9]{10})$/;
    if(phone==""){
        document.getElementById("invalid-phone").innerHTML="";

    }
    else if(!phonx.test(phone)){
            document.getElementById("invalid-phone").innerHTML="*Indian Phone Number Required";
            return false;
    
        }
    else{
        document.getElementById("invalid-phone").innerHTML="";
    }






    // if(email!=""){
    //     if(!regx.test(email)){
    //         document.getElementById("invalid-email").innerHTML="*Invalid Email"
    //         return false;
    //     }
        

    // }
    // else{
    //     document.getElementById("invalid-email").innerHTML="*Email Required"
    //     return false;
    // }
    // if(age!=""){
    //     if((age<0)|(age>110)){
    //         document.getElementById("invalid-age").innerHTML="*Invalid Age"
    //         return false;
    //     }
    // }
    // else{
    //     document.getElementById("invalid-age").innerHTML="*Age Required"
    //     return false;

    // }
    // var phonx=/^[+][9][1]([0-9]{10})$/
    // if(!phonx.test(phone)){
    //     document.getElementById("invalid-phone").innerHTML="*Indian Phone Number Required"
    //     return false;

    // }
 
}

