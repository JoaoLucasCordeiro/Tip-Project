const bill = document.getElementById('input-bill')
const percent = document.getElementById('tip-percent')
const people = document.getElementById('input-people')
const tipPerson = document.getElementById('h2-result')
const totalTip = document.getElementById('h2-result-total')
const spantotaltip = document.getElementById('totaltipspan')
const spantotalbill = document.getElementById('totaltipspan=final')
const error = document.getElementById('msg-error')
const resetBtn = document.getElementById('btn-reset')

bill.addEventListener('input', funBill)
people.addEventListener('input', funPeople)
percent.addEventListener('input', funPercent)
resetBtn.addEventListener("click", reset);

tipPerson.innerHTML = '$' + (0.0).toFixed(2)
totalTip.innerHTML = '$' + (0.0).toFixed(2)


function funBill() {
    billValue = parseFloat(bill.value)
    calculateTip()
}

function funPercent() {
   percentValue = parseFloat(percent.value)
    validateDataPercent()
    validateDataPeople()
    calculateTip()
}

function funPeople() {
    peopleValue = parseFloat(people.value)
    validateDataPercent()
    validateDataPeople()
    calculateTip()

}


function calculateTip() {

    if (people.value >= 1) {
        let tipPerPerson = (billValue * percentValue / 100) / peopleValue
        let tipTotal = (billValue + tipPerPerson) / peopleValue
        let spantotalT = (billValue * percentValue / 100)
        let spantotalB = tipTotal * peopleValue 

        tipPerson.innerHTML = '$' + tipPerPerson.toFixed(2)
        totalTip.innerHTML = '$' + tipTotal.toFixed(2)
        spantotaltip.innerHTML = `<strong>Gorjeta total:</strong> $${spantotalT.toFixed(2)}`
        spantotalbill.innerHTML = `<span><strong>Valor total:</strong> $${spantotalB.toFixed(2)}</span>`
    }

}


function validateDataPeople(){
    if (people.value <= 0){
        error.style.display = 'flex'
        tipPerson.innerHTML = '$0.00'
        totalTip.innerHTML = '$0.00'
        spantotaltip.innerHTML = `<strong>Gorjeta total:</strong> $0.00`
        spantotalbill.innerHTML = `<strong>Valor total:</strong> $0.00`
    } else if (peopleValue > 0){
        error.style.display = 'none'
    }
}

function validateDataPercent(){
    if (percent.value > 50){
        error.style.display = 'flex'
        percent.value = '0'
        tipPerson.innerHTML = '$0.00'
        totalTip.innerHTML = '$0.00'
        spantotaltip.innerHTML = `<strong>Gorjeta total:</strong> $0.00`
        spantotalbill.innerHTML = `<strong>Valor total:</strong> $0.00`
    }else if (percentValue < 50){
        error.style.display = 'none'
    }
}

function reset() {
    bill.value = ''
    funBill()
    people.value = ''
    funBill()
    percent.value = ''
    funBill()
    tipPerson.innerHTML = '$0.00'
    funBill()
    totalTip.innerHTML = '$0.00'
    funBill()
    spantotaltip.innerHTML = `<strong>total:</strong> $0.00`
    funBill()
    spantotalbill.innerHTML = `<strong>total:</strong> $0.00`
    funBill()
    error.style.display = 'none'
  }


