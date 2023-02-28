// Sweet Alert
// Email JS
function validate(){
    let type=document.querySelector('.type');
    let loc=document.querySelector('.location');
    let date=document.querySelector('.date');
    let evidence=document.querySelector('.evidence');
    let des=document.querySelector('.description');
    let sendBtn=document.querySelector('.send-btn'); 


    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(type.value=="" || loc.value=="" || date.value=="" || evidence.value=="" || des.value==""){
            emptyerror();
            
        }else{
            // sendemail(name.value, email.value, msg.value);
            success();
        }
    })
}

validate();

function sendemail(name, email, msg){
    
    emailjs.send("service_b12bu9t","template_j5vf8vq",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "Oh No...",
        text: "Fields Can't Be Empty!",
        icon: "error",
      });     
}

function success(){
    swal({
        title: "Successfully Reported...",
        text: "You will be responded in 24hrs",
        icon: "success",
      });     
}
