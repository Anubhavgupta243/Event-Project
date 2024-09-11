// document.getElementById("owl").onclick = function(){
//     alert("Please select");
// }

document.getElementById("images").addEventListener("click", function(e){

    console.log("clicked inside the ul");  
} , false);

document.getElementById("owl").addEventListener("click", function(e){

    console.log("clicked the owl");
    // e.stopPropagation();
} , false);
document.getElementById("google").addEventListener("click", function(e){

    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
} , false);

document.getElementById("images").addEventListener("click", function(e){
    console.log(e.target.tagName);

    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        let removeItem = e.target.parentNode;
    removeItem.remove();
    }

    
    
},false);



