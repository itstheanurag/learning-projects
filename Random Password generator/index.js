const upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseString = 'abcdefghijklmnopqrstuvwxyz'
const numberString = '0123456789'
const specialSymbols = '!@#%^&*';


const useUpper = document.getElementById('upper');
const useLower = document.getElementById('lower');
const useNumbers = document.getElementById('num');
const useSymbols = document.getElementById('symbols')
const generateButton = document.getElementById('generate')
const len = document.getElementById('length')

const password = document.getElementById('password')

const createMegaString = (upper, lower, numbers, symbols) => {
    let megastring = '';

    if (useUpper.checked) {
        megastring += upper;
    }

    if (useLower.checked) {
        megastring += lower
    }

    if (useNumbers.checked) {
        megastring += numbers
    }

    if (useSymbols.checked) {
        megastring += symbols
    }

    return megastring;
}

const createRandomPassword = (length) => {
    let result = ''
    let megaString = createMegaString(upperCaseString, lowerCaseString, numberString, specialSymbols);

    if (!megaString.length) {
        megaString = 'abcdefghjiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*'
    }

    for (let i = 0; i < length; i++) {
        result += megaString.charAt(Math.floor(Math.random() * megaString.length));
    }

    return result
}

generateButton.addEventListener('click', () => {
    const ans = createRandomPassword(parseInt(len.value))
    password.innerHTML = ans
})