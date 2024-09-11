const change = document.querySelector("h1");
change.innerHTML = 'Start Should Change the Background color every second <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="50px" style="vertical-align: middle;">';

//generate a random colr

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)
    }
    
}
document.querySelector("#start").addEventListener("click",startChangingColor

);

const stopChangingColor = function(){
    clearInterval(intervalId);
    document.body.style.backgroundColor = "black";
    intervalId = nuk;

};

document.querySelector("#stop").addEventListener("click",stopChangingColor
);