
const decreaseBtn = document.querySelector('.decrease')
const resetBtn = document.querySelector('.reset')
const increaseBtn = document.querySelector('.increase')
const counter = document.querySelector('.counter')

let count = 0;

counter.innerHTML = count;
increaseBtn.addEventListener('click', () => {
    counter.innerHTML = count + 1;
    count += 1;

})
decreaseBtn.addEventListener('click', () => {
    counter.innerHTML = count - 1;
    count -= 1;

})

resetBtn.addEventListener('click', () => {
    counter.innerHTML = 0;
})

if (counter.innertext > 0) {
    counter.style.color = 'green'
} else if (counter.innerHTML < 0) {
    counter.style.color = 'red'
}