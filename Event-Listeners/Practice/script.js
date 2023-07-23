const allButtons = document.querySelectorAll(".buttons button");

allButtons.forEach(button => {
    button.addEventListener("click", (e)=>{
       e.target.style.backgroundColor = "green";
       e.target.style.color = "white";
       e.target.style.fontWeight = "bold"
    })
})