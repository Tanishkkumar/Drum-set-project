// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("i got clicked");     //normal function
// }
let a;  //loop for number of button.....
for(a=0;a<document.querySelectorAll(".dr").length;a++){
document.querySelectorAll(".dr")[a].addEventListener("click",function(){ 
    // alert("i got clicked!")    //anonymous function..
    // let audio=new Audio("sounds/tom-1.mp3");
    // audio.play();

    // console.log(this.style.color="white");
    let a=this.innerHTML;  //ye hume ek ek key dega..jaise w,a etc
     makesound(a);

     buttonanimation(a);
  
});
}

// document.addEventListener("keydown",function(){
//     alert("key is pressed"); 
// })
 
document.addEventListener("keydown",function(event){
    //alert(event);
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key){
     
    switch (key) {
        case "w":console.warn("dff");
            let one=new Audio("sounds/tom-1.mp3");
             one.play();
            break;

         case "a":
         let two=new Audio("sounds/tom-2.mp3");
             two.play();
            break; 

            case "s":
            let three=new Audio("sounds/tom-3.mp3");
             three.play();
            break;

            case "d":
            let four=new Audio("sounds/tom-4.mp3");
             four.play();
            break;

            case "j":
            let five=new Audio("sounds/crash.mp3");
             five.play();
            break;

            case "k":
            let six=new Audio("sounds/kick-bass.mp3");
             six.play();
            break;   

            case "l":
            let seven=new Audio("sounds/snare.mp3");
             seven.play();
            break;   
    
        default:
            break;
    }

}

function buttonanimation(key){
   var active= document.querySelector("."+key);
   active.classList.add("pressed");
   setTimeout(function(){                               //remove pressed class form button to be executed..
       active.classList.remove("pressed");

   },800)

}
