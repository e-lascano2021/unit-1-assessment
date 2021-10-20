const input = document.getElementById("number-input")
const result = document.getElementById("result")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")


resetBtn.addEventListener("click", init)
plusBtn.addEventListener("click", add)
minusBtn.addEventListener("click", subtract)


init()

function init(){
  input.value = "1"
  result.innerHTML = "0"
  render()
}

function add(evt){
  const sum = parseInt(result.innerHTML) + parseInt(input.value)
  result.innerHTML = sum
  render()
}

function subtract(evt){
  const sum = parseInt(result.innerHTML) - parseInt(input.value)
  result.innerHTML = sum
  render()
}

function render(){
  if (parseInt(result.innerHTML) < 0)result.style.color = "red"
  else result.style.color = "black"
}