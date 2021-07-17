function nextpage()
{
    // card velidation
  

if( ccnum.value.length < 16 || !/[0-9]{16}/.test(ccnum.value) ) {
   alert("Enter valid card number");
   warnig(ccnum);
   return false;
}
if( cvv.value.length < 3 || !/[0-9]{3}/.test(cvv.value) ) {
    alert("Enter valid CVV anumber");
    warnig(cvv);
    return false;
 }
 if(expmonth.value <=0 || expmonth.value > 12)
{
    alert("Enter valid Month");
    warnig(expmonth);
     return false;

}
else{
    sucess(expmonth);
}
if(!validmail()){
    alert("Enter valid Email id");
    warnig(email);
    return false;
}
else{
    sucess(email);
}

if(isNaN(zip.value)){
    alert("Value should be number");
    warnig(zip);
    return false;
}
else{
    sucess(zip);
}
if(isNaN(ccnum.value)){
    alert("Value should be number");
    warnig(ccnum);
    return false;
}
else{
    sucess(ccnum);
}
if(isNaN(expmonth.value)){
    alert("Value should be number");
    warnig(expmonth);
    return false;
}
else{
    sucess(expmonth);
}
if(isNaN(expyear.value)){
    alert("Value should be number");
    warnig(expyear);
    // return false;
}
else{
    sucess(expyear);
}
if(isNaN(cvv.value)){
    alert("Value should be number");
    warnig(cvv);
    return false;
}
else{
    sucess(cvv);
}

if(zip.value.length<6){
    alert("value should be 6 digit");
    warnig(zip);
    return false;
}
else{
sucess(zip);
}
if(expyear.value.length<4){
    alert("value should be 4 digit");
    warnig(expyear);
    return false;
}
else{
sucess(expyear);
}
if(cvv.value.length<3){
    alert("value should be 3 digit");
    warnig(cvv);
    return false;
}
else{
sucess(cvv);
}



    var button = document.getElementById("myButton");
    button.addEventListener("click", function(){
        console.log("clike hua");
        document.location.href = './otppage.html';
    });

}

function validmail(){
    let c="@gmail.com";
    const mail= email.value;
    let b="";
    for(let i=0;i<mail.length;i++){
        if(mail[i]==='@'){
            while(i<mail.length){
                b+=mail[i];
                i++;
            }
        }
    }
    if(b===c){
        return true
    }
    return false;
}


function warnig(obj){
     obj.style.borderColor="red";
     obj.style.color="red";

}
function sucess(obj){
    obj.style.borderColor="#719ECE";
    obj.style.color="black";
}

// value of all input field
const fname = document.forms["form1"]["firstname"];
const email = document.forms["form1"]["email"];
const state = document.forms["form1"]["state"];
const zip = document.forms["form1"]["zip"];
const cname = document.forms["form1"]["cardname"];
const ccnum= document.forms["form1"]["cardnumber"];
const expmonth = document.forms["form1"]["expmonth"];
const expyear = document.forms["form1"]["expyear"];
const cvv = document.forms["form1"]["cvv"];
const confirm = document.forms["form1"]["confirm"];





function checking(){
  

    if (fname.value !="" && email.value!="" && state.value!="" && zip.value!="" && cname.value!="" && ccnum.value!="" && expmonth.value!="" && expyear.value!="" && cvv.value!="")
    {
        if(confirm.checked){
            nextpage();
        }
        else{
            alert("Plese Confirm Term and Conditin");
        }
       
    return false;
    }
    else 
    {
        alert("Plese Enter Manadatory field");
        if(fname.value==""){
            warnig(fname);
         
        }
        else{
            sucess(fname);
        }
        if(email.value==""){
     
          warnig(email);

        }
        else{
           sucess(email);

        }
        if(state.value==""){
          
            warnig(state);
         
        }
        else{
           sucess(state);

        }
        if(zip.value==""){
       
            warnig(zip);
        
        }
        else{
            sucess(zip);
        }
        if(cname.value==""){
           
            warnig(cname);
         
        }
        else{
            sucess(cname);
        }
        if(ccnum.value==""){
     
            warnig(ccnum);
    
        }
        else{
            sucess(ccnum);
        }
        if(expmonth.value==""){
        
            warnig(expmonth);
     
        }
        else{
            sucess(expmonth);
        }
        if(expyear.value==""){
      
            warnig(expyear);

        }
        else{
            sucess(expyear);
            
        }
        if(cvv.value==""){

            warnig(cvv);
     
        }
        else{
            sucess(cvv);
        }
     return false; 
    }
  
}

var clear1 = document.getElementById("Clear");
clear1.addEventListener("click", function(){
        document.getElementById("fname").value='';
        document.getElementById("email").value='';
        document.getElementById("adr").value='';
        document.getElementById("city").value='';
        document.getElementById("state").value='';
        document.getElementById("zip").value='';
        document.getElementById("cname").value='';
        document.getElementById("ccnum").value='';
        document.getElementById("expmonth").value='';
        document.getElementById("expyear").value='';
        document.getElementById("cvv").value='';
    });


    var cancil1 = document.getElementById("cancel");
    cancil1.addEventListener("click", function(){


        
        document.location.href = './page2.html';
        });

