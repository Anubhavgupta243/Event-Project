const change = document.querySelector("h1");
change.innerHTML = 'Best Javascript series on Youtube <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="50px" style="vertical-align: middle;">';



let interval;
function sayDate(){
    console.log("Timestamp: ",Date.now());
    
}

document.querySelector("#start").addEventListener("click",function(){
    interval = setInterval(sayDate,1000);
    console.log("started");
    
});

document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(interval);
    console.log("stopped");
});