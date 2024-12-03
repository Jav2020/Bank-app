// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const delBtn= document.getElementById("del-btn")


// const LeadFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))
// console.log(LeadFromLocalStorage)
// localStorage.setItem("myLeads", JSON.stringify(myLeads))
// if(LeadFromLocalStorage){
//        myLeads=LeadFromLocalStorage
// }
//   renderLeads()




// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     renderLeads()


//     console.log(localStorage.getItem("myLeads"))
// })

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems  
// }
// delBtn.addEventListener("click", function(){
//     console.log("double clicked")
//     localStorage.clear()
//     myLeads=[]
//     renderLeads()
     

// })
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
// import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"

// const firebaseConfig = {
//     databaseURL: "https://leadstracker-app-3d123-default-rtdb.firebaseio.com/"
// }
// const app = initializeApp(firebaseConfig);
// const database= getDatabase(app)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn= document.getElementById("del-btn")
// 1. Store the delete button in a deleteBtn variable
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
delBtn.addEventListener("click", function(){
    console.log("Hello i am here")
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

