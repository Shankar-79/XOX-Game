let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let undobtn= document.querySelector("#undo-btn");
let redobtn= document.querySelector("#Redo-btn")
let newgamebtn=document.querySelector("#new-game")
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;//playerX,playerO

const winpatterns =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [2, 4, 6],
    [2, 5, 8],
    [1, 4, 7],
];const resetgame = () =>{
    turn0=true;
    enableeboxes();
    enablereset();
    msgcontainer.classList.add("hide");
    

}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO === true){
            box.innerText ="O";
            turnO =false;
        } else {;
            box.innerText ="X";
            turnO = true;
        }
       box.disabled=true;
      
        checkwinner();
    });
} );
const disableboxes = () => {
for(let box of boxes) {
    box.disabled =true;
  
}
}
const enableeboxes = () => {
    for(let box of boxes) {
        box.disabled =false;
        box.innerText="";
    }
    }
    const disablereset = () => {
   
        resetbtn.disabled =true;
    }
    const enablereset =() =>{
        resetbtn.disabled =false;
       
    }

    newgamebtn.addEventListener("click",resetgame);
    resetbtn.addEventListener("click",resetgame);
const showwinner = (winner) => {
    msg.innerHTML =`winner`;
   msgcontainer.classList.remove("hide");
}

const checkwinner = () => {
    for( let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("Winner",pos1val);
                disableboxes();
                disablereset();
                showwinner(pos1val);
                
            }
        }
    }

}



    