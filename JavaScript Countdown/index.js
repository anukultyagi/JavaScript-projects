
const user_birthdate = prompt("Enter Your Birth Date in month dd, YYYY format")
user_birthdate.slice(0,1).toUpperCase();

date_string = user_birthdate+" 17:40:00"
eventTime = Date.parse(date_string);

function countdown() {
    currTime = new Date();
    // console.log(currTime)
    // eventTime = Date.parse("august 25, 2022 00:00:00");
    diff = eventTime - currTime;
    days = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours = Math.floor(diff / (1000 * 60 * 60))
    minutes = Math.floor(diff / (1000 * 60))
    sec = Math.floor(diff / 1000)

    d = days;
    h = hours - days * 24;
    m = minutes - hours * 60;
    s = sec - minutes * 60;



    if (d === 0 && h === 0 && m === 0 && s === 0) {
        return document.querySelector(".timer").innerHTML = ("Timer Finished")

    } else if (diff > 0) {
        return document.querySelector(".timer").innerHTML = (d + " days : " + h + " hours : " + m + "minutes : " + s + "secs")
    }
    else {
        return document.querySelector(".timer").innerHTML = ("Timer Finished")
    }

}


setInterval(countdown, 1000)
