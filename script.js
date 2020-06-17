const input = document.getElementById('temperatureInput')
const tempSelector = document.getElementById('tempSelect')
const form = document.getElementById('main-form')
const result = document.getElementById('result')

let inputValue = 0
let selectedTemp = 'fahrenheit'

function displayResult(res) {
  result.innerText = res
}

function convertToF(c) {
  const res = c * (9 / 5) + 32

  displayResult(res)
}

function convertToC(f) {
  const res = ((f - 32) * 5) / 9
  displayResult(res)
}

tempSelector.addEventListener('change', function (e) {
  selectedTemp = e.target.value
})

form.addEventListener('submit', function (e) {
  e.preventDefault()

  inputValue = input.value

  if (selectedTemp === 'fahrenheit') {
    console.log(convertToC(inputValue))
  }

  if (selectedTemp === 'celsius') {
    console.log(convertToF(inputValue))
  }
})
