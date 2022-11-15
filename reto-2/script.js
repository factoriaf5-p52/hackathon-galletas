// let a = document.querySelector('#tests').style.background = 'red'


let keyValue = document.addEventListener("keypress", (keyValue) => {

    if (keyValue.key === 'r') {
        document.querySelector("#tests").classList.add('red')
        document.querySelector("#tests").classList.remove('yellow', 'white')
    } if (keyValue.key === 'y') {
        document.querySelector("#tests").classList.add('yellow')
        document.querySelector("#tests").classList.remove('red', 'white')
    } if (keyValue.key === 'w') {
        document.querySelector("#tests").classList.add('white')
        document.querySelector("#tests").classList.remove('red', 'yellow')
    }
})