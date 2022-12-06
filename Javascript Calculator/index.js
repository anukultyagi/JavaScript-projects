let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            string = eval(string)
            document.querySelector(".display").value = string;
        } else if (e.target.innerText == 'X') {
            string  = string+'*'
            document.querySelector(".display").value = string
        }
        else if (e.target.innerText == 'C') {
            string  = ""
            document.querySelector(".display").value = string
            
        }
        else {
            console.log(e.target.innerText)
            string = string + (e.target.innerText)
            document.querySelector(".display").value = string;

        }

    })
})