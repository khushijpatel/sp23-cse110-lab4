function Time(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

console.log(setInterval(Time, 1000))