
const decreaseBtn = document.querySelector('.decrease')
const resetBtn = document.querySelector('.reset')
const increaseBtn = document.querySelector('.increase')
const counter = document.querySelector('.counter')

let count = 0;
counter.innerHTML = count;

increaseBtn.addEventListener('click', () => {
    count++;
    if(count > 0){
        counter.style.color = "green";
    }else if(count === 0){
        counter.style.color = "black"
    }
    counter.innerHTML = count;

})
decreaseBtn.addEventListener('click', () => {
    count--;
    if(count < 0){
        counter.style.color = "red";
    }else if(count === 0){
        counter.style.color = "black";
    }
    counter.innerHTML = count;

})

resetBtn.addEventListener('click', () => {
    counter.innerHTML = 0;
    counter.style.color = "black";
})
