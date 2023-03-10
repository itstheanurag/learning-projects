const bill = document.getElementById('bill');
const pay_tip = document.getElementById('tip');
const total_bill = document.getElementById('total-bill');
const error = document.getElementById('error');

pay_tip.addEventListener('input', (event) => {
    if (!bill.value) {
        if (error.classList.contains('hidden')) {
            error.classList.remove('hidden')
            error.innerHTML = `Must provide value for bill, you entered nothing`
            console.log(event.target.value)
        }

    } else {
        if (!error.classList.contains('hidden')) {
            error.classList.add('hidden');
        }

        const percent = parseInt(pay_tip.value);
        const principle = parseInt(bill.value);
        if (principle && percent) {
            const bill_to_pay = calculate(principle, percent)
            total_bill.value = (bill_to_pay + principle).toFixed(2)
        }
    }
})

function calculate(principle, percentage) {
    const amount = (percentage / 100) * principle
    return amount
}

bill.addEventListener('input', (event) => {
    if (!error.classList.contains('hidden')) {
        error.classList.add('hidden');
    }

    const percent = parseInt(pay_tip.value);
    const principle = parseInt(bill.value);
    if (principle && percent) {
        const bill_to_pay = calculate(principle, percent)
        total_bill.value = (bill_to_pay + principle).toFixed(2)
    }
})