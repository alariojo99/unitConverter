/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById('units')
const btn = document.getElementById('btn-convert')

const lengthCard = document.querySelector('#length-text')
const volumeCard = document.querySelector('#volume-text')
const massCard = document.querySelector('#mass-text')

btn.addEventListener('click', function(){
    lengthCard.textContent = `${input.value} meters = ${(input.value * 3.281).toFixed(3)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(3)} meters`

    volumeCard.textContent = `${input.value} liters = ${(input.value *  0.264).toFixed(3)} gallons | ${input.value} gallons = ${(input.value / 0.264).toFixed(3)} liters`
    
    massCard.textContent = `${input.value} kilos = ${(input.value * 2.204).toFixed(3)} pounds | ${input.value} pounds = ${(input.value / 2.204).toFixed(3)} kilos`
})