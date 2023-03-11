const bill = document.getElementById('bill');
const pay_tip = document.getElementById('tip');
const total_bill = document.getElementById('total-bill');
const error = document.getElementById('error');

pay_tip.addEventListener('input', (event) => {
    if (!bill.value) {
        if (error.classList.contains('hidden')) {
            error.classList.remove('hidden')
            console.log("error1")
        }

    } else {
        if (!error.classList.contains('hidden')) {
            error.classList.add('hidden')
        }

        if (!pay_tip.value) {
            total_bill.value = "Your total bill will come here"
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

    if (typeof bill.value === 'number') {
        if (!error.classList.contains('hidden')) {
            error.classList.add('hidden')
        }
    }

    if (!bill.value && pay_tip.value) {
        if (error.classList.contains('hidden')) {
            error.classList.remove('hidden');
        }

        total_bill.value = "Your total bill will come here"
    }

    const percent = parseInt(pay_tip.value);
    const principle = parseInt(bill.value);

    if (principle && percent) {
        const bill_to_pay = calculate(principle, percent)
        total_bill.value = (bill_to_pay + principle).toFixed(2)
    }
})


