const changeText = function(){
    const change = document.querySelector("h1");
change.innerHTML = 'Best Javascript series on Youtube <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="50px" style="vertical-align: middle;">';

}

const changeMe = setTimeout(changeText , 2000)

document.querySelector("#stop").addEventListener("click",function(){
    clearTimeout(changeMe);
    console.log("stopped");
    
})

