

function timer() {
    let output = document.querySelector(".clock");
    let time = new Date().toLocaleTimeString();
    console.log(time)
    output.innerText = time;

}
setInterval(timer, 1000)