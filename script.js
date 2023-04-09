// variáves
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', keyEnter)

// função + função callback
function handleTryClick(event) {
    event.preventDefault() // n faca o padrao desse evento

    const inputNumber = document.querySelector("#inputNumber")

    if (inputNumber.value == "") {
        alert("Calma amigo! Sem número não pode em ;)")
    }
    else{
        if (Number(inputNumber.value) == randomNumber) {
            toggleScreen()
            document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
        }
        else if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0){
            alert('Calma amigo!! O número é entre 0 ~ 10 ;o')
        }
    
        inputNumber.value = ""
        xAttempts++
    } 
}
function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keyEnter(e) {
    if (e.key =='Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}