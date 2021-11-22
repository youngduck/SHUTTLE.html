function callback (){
    console.log("call back function is called");
}

setTimeout(callback,3000);

var timer = setInterval(callback,1000);
console.log(timer);
