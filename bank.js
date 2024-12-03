
let bigBtn2= document.querySelector(".big-btn2");
let bigBtn1= document.querySelector(".big-btn1");
let title= document.querySelector(".title");




bigBtn2.addEventListener("click",function () {
    const username = document.querySelector(".input-field3").value;
    const password = document.querySelector(".input-field4").value;
     const fullname= document.querySelector(".input-field1").value;
     const Email= document.querySelector(".input-field2").value;
    //  const Account=  generateAccountNumber()
    console.log("hello")
    //  localStorage.setItem("username", username);
    //  localStorage.setItem("password", password);
    //  localStorage.setItem("fullname", fullname);
    //  localStorage.setItem("Email",Email);

let userdata=[]
 userdata= JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
 if (userdata.some((v) =>{
    return v.email === Email})) {
    alert("Duplicate data");
 }
 else {
    // Add the new user record
    userdata.push({
        "name": fullname,
        "email": Email,
        "password": password,
        "username":username,
        // "accountnumber": Account
    });
    localStorage.setItem("user", JSON.stringify(userdata))
}

   

})
bigBtn1.addEventListener("click", function(){
    let email, password
     password = document.getElementById("loginpassword").value;
    email = document.getElementById("input-field").value;
    let userecord=[]
    userecord=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
    if (userecord.some((v) =>{
        return v.email === email && v.password===password})) {
        alert("login sucessful");

        
        window.location.href = "dashboard.html";
    
        
     }  
     else {
        // Add the new user record
        alert("login fail")
       
    }
    

   
        


  })



  
  
  
