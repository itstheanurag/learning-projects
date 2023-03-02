const celcius = document.getElementById('celcius');
const farenheit = document.getElementById('farenheit');

celcius.addEventListener('change', (event) => {
   const far =  celciusToFarenheit(parseInt(event.target.value));
//    console.log(farenheit)
   farenheit.value = far;
});

celcius.addEventListener('input', (event) => {
   const far =  celciusToFarenheit(parseInt(event.target.value));
//    console.log(farenheit)
   farenheit.value = far;
});

farenheit.addEventListener('change', (event) => {
    const cel =  farenheitToCelcius(parseInt(event.target.value));
//    console.log(cel)
   celcius.value = cel;
});

farenheit.addEventListener('input', (event) => {
    const cel =  farenheitToCelcius(parseInt(event.target.value));
//    console.log(cel)
   celcius.value = cel;
});

function farenheitToCelcius(num){
    return ((num-32) * (5/9)).toFixed(2)
}

function celciusToFarenheit(num){
    return ((num * (9 / 5)) + 32).toFixed(2)
}
