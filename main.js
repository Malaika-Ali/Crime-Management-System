// Sweet Alert
// Email JS
function validate(){
    let name=document.querySelector('.name');
    let cnic=document.querySelector('.cnic');
    let email=document.querySelector('.email');
    let pw=document.querySelector('.password');
    let phone=document.querySelector('.phone');
    let cpw=document.querySelector('.confirm-password');
    let gender=document.querySelector('.gender');
    let sendBtn=document.querySelector('.send-btn'); 


    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value=="" || cnic.value=="" || email.value=="" || pw.value=="" || phone.value=="" || gender.value==""){
            emptyerror();
            
        }else{
            // sendemail(name.value, email.value, msg.value);
            success();
            // window.location.href = "login.html";
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
        title: "Successfully Registered...",
        text: "Now You can continue",
        icon: "success",
      });     
    }

// Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDk7on1ykYVvpn1PyNHXIu_61332XV68Og",
//     authDomain: "crime-management-fad67.firebaseapp.com",
//     databaseURL: "https://crime-management-fad67-default-rtdb.firebaseio.com",
//     projectId: "crime-management-fad67",
//     storageBucket: "crime-management-fad67.appspot.com",
//     messagingSenderId: "604947376101",
//     appId: "1:604947376101:web:1339395a4cbd694864b10c"
//   };

//   Firebase Initialization
//   firebase.initializeApp(firebaseConfig);

//   Reference of database
// var crimeManagementDB = firebase.database().ref('crime-management')
// document.getElementById('register').addEventListener("Register", submitForm);

// function submitForm(e){
//     e.preventDefault();

//     var name = getElementVal("name");
//     var cnic = getElementVal("cnic");
//     var email = getElementVal("email");
//     var phone = getElementVal("phone");
//     var password = getElementVal("password");
    // var password = getElementVal("password");

//     console.log(name, cnic, email, phone, password);

// }

// Get values
// const getElementVal= (id)=>{
//     return document.getElementById(id).value;
// };

