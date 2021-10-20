const input = document.getElementById("number-input")
const result = document.getElementById("result")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")


plusBtn.addEventListener("click", add)
minusBtn.addEventListener("click", subtract)


function add(evt){
  const sum = parseInt(result.innerHTML) + parseInt(input.value)
  result.innerHTML = sum
}

function subtract(evt){
  const sum = parseInt(result.innerHTML) - parseInt(input.value)
  result.innerHTML = sum
}
