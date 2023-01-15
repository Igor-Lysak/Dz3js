var block = document.querySelector(".div");
var block2 = document.querySelector(".div2");
var block3 = document.querySelector(".div3");

block.style.color = "red";
block2.style.color = "red";
block3.style.color = "red";


block.addEventListener("click", ()=> {
    if(block.style.color === "green"){
        block.style.color = "red";
    }

    else if(block.style.color === "red"){
        block.style.color = "green";
    }
});


block2.addEventListener("click", ()=> {
    if(block2.style.color === "green"){
        block2.style.color = "red";
    }

    else if(block2.style.color === "red"){
        block2.style.color = "green";
    }
});

block3.addEventListener("click", ()=> {
    if(block3.style.color === "green"){
        block3.style.color = "red";
    }

    else if(block3.style.color === "red"){
        block3.style.color = "green";
    }
});