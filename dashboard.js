// // window.prompt("welcome Joshua to your dashboard")
// // const inputField3= document.querySelector(".inputField3").value
// const balPar= document.getElementById("bal-par")
// // const transfer= document.getElementById("transfer")
// // const allForm= document.getElementById("allform")
// // const Send = document.getElementById("send")
// // let inputEl =document.getElementById("input-el")
// const senderUsername = document.getElementById("user3").value.trim();
// const receiverUsername = document.getElementById("user1").value.trim();
// const transferAmount = parseFloat(document.getElementById("user3").value);
// const Send= document.getElementById("send")


// //  welcome.innerHTML+=inputField3
// // let amount= 100000

// // transfer.addEventListener("click", function(){
// //     allForm.style.display="flex"

// // })
// // Send.addEventListener("click", function(){
// //     allForm.style.display="none"
// //    let  Amount= inputEl.value
// //    total= amount -  Amount
// //    balance.textContent = "Current account balance:"+" $"+ total
// // console.log(Amount)
// //   // let  newamount= amount+Amount2
// //   //   console.log(newamount)
// // })



  
// localStorage.setItem("users", JSON.stringify(dashboard));

// Send.addEventListener("click", function(e){
//   // e.preventDefault()

//   let dashboard =[]
// dashboard=JSON.parse(localStorage.getItem("user"))

// let userToUpdate = dashboard.find((user) => user.username === "receiverUsername");
// if (userToUpdate) {
//   // Step 3: Add a new property to the found object
//   userToUpdate.Balance = 5000; // Adding a new property 'age' with the value 25
//   localStorage.setItem("users", JSON.stringify(dashboard));
//   console.log("Updated User Object:", userToUpdate);
// }
// else {
//   console.log("User not found!");
// }

// if (isNaN(transferAmount) || transferAmount <= 0) {
//   alert("Please enter a valid amount.");
//   return;
// }

// const sender = users.find((user) => user.username === senderUsername);
// const receiver = users.find((user) => user.username === receiverUsername);
// if (!sender) {
//   alert("Sender does not exist.");
//   return;
// }

// if (!receiver) {
//   alert("Receiver does not exist.");
//   return;
// }

// if (sender.balance < transferAmount) {
//   alert("Insufficient funds.");
//   return;
// }
// sender.balance -= transferAmount;
// receiver.balance += transferAmount;
// localStorage.setItem("users", JSON.stringify(dashboard))

// alert(`Transfer successful! ${transferAmount} has been sent to ${receiver.username}.`);
// document.getElementById("transferForm").reset()
// })

const Send= document.getElementById("send")
const balPar= document.getElementById("bal-par")
const withDraw= document.getElementById("withdraw")
const draw= document.getElementById("draw")


Send.addEventListener("click", function(){
  let transferAmount = parseFloat(document.getElementById("user2").value);
  

  const balance= parseFloat(balPar.textContent)
  let sum= balance + transferAmount
      balPar.textContent= sum
      // console.log( amountValue)
})
withDraw.addEventListener("click", function(){
    let withdrawAmount=parseFloat(document.getElementById("draw").value);
    const balance= parseFloat(balPar.textContent)
    let sub= balance - withdrawAmount
    balPar.textContent= sub

    if(balPar.textContent<=0){
      alert("Insufficient funds")
    }
})
