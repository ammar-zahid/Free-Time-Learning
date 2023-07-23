// const buttonOne = document.getElementById("one");
// buttonOne.addEventListener("click", ()=>{
//     console.log("button one");
// })
// const buttonTwo = document.getElementById("two");
// buttonTwo.addEventListener("click", ()=>{
//     console.log("button two");
// })
// const buttonThree = document.getElementById("three");
// buttonThree.addEventListener("click", ()=>{
//     console.log("button three");
// })


const allButtons = document.querySelectorAll(".buttons button");

for (button of allButtons){
    button.addEventListener("click", function(){
        console.log(this.textContent)
    })    
}