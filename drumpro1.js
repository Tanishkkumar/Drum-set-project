for(let a=0;a<document.querySelectorAll(".dr").length;a++){
     
    document.querySelectorAll(".dr")[a].addEventListener( "click",handleClick);
}

function handleClick(){
    alert("i got clicked"); 
}
    

// function got(){
//     document.querySelector("button").textContent="T";
// }