let inputEl= document.getElementById("input-el")
let ulEl= document.getElementById("ul-el")
myLead= []
function input(){
    console.log("This button is clicked")
     
    myLead.push(inputEl.value)
    inputEl.value= ""
   
    

    renderLead()
    
    
}



function renderLead(){
    // let listItem=""
    myLead.forEach(function(listItem){
        console.log(listItem)
        ulEl.innerHTML+= listItem
    })

    // for(let i=0; i<myLead.length; i++){
    //     console.log(myLead[i])
    //  listItem= "<li> <a href='#'>"+myLead[i]+"</a></li>"
    // }
    //if(inputEl.value=""){
        //listItem="come"
    //}
//    console.log(listItem)
   
    // ulEl.innerHTML+= listItem
    
}
let numbers = [1, 2, 3, 4];

numbers.forEach(function(number, index, array) {
    array[index] = number * 2;
});
console.log(numbers)
const fruits = ["apple", "banana", "mango", "orange"];

fruits.forEach(function(fruit, index) {
    console.log(index,fruit);
});

