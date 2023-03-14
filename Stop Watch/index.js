const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');
const timeContent = document.getElementById('content');

pauseButton.disabled = true;
resetButton.disabled = true;

let hours = '00'
let minutes = '00'
let seconds = '00'

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    function time() {
        seconds++;
        if (seconds < 10) {
            seconds = '0' + seconds
        }

        if (seconds > 60) {
            minutes++;
            seconds = 0

            if (minutes) {
                if (minutes < 10) {
                    minutes = '0' + minutes
                }

                if (minutes > 60) {
                    hours++;
                    minutes = 0;

                    if (hours) {

                        if (hours < 10) {
                            hours = '0' + hours
                        }
                    }
                }
            }
        }
        timeContent.innerText = `${hours} hr : ${minutes} min : ${seconds} sec`;
    }
    const idOfInterval = setInterval(time, 1000);

    pauseButton.disabled = false;
    pauseButton.style.color = 'red'
    pauseButton.style.border = '1px solid red'
    pauseButton.addEventListener('click', () => {
        clearInterval(idOfInterval)
        pauseButton.disabled = true;
    })
    resetButton.disabled = false;
})

resetButton.addEventListener('click', () => {

    hours = '00'
    minutes = '00'
    seconds = '00'
    timeContent.innerText = `${hours} hr : ${minutes} min : ${seconds} sec`;
})


