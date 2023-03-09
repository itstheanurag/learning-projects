const input = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error')
const taskDiv = document.getElementById('tasks')

submitBtn.addEventListener('click', (event) => {

    if (input.value.length === 0) {
        if (errorMessage.classList.contains('hidden')) {
            errorMessage.classList.remove('hidden');
        }
    }
    else {

        if (!errorMessage.classList.contains('hidden')) {
            errorMessage.classList.add('hidden')
        }

        //  Creating Required Elements
        const createDivElement = document.createElement('div')
        const createHeading = document.createElement('p')
        const doneButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        // Setting InnerHtml Values to ALl the Elements
        createHeading.innerHTML = input.value;
        // making input value empty so that we have good user experie
        input.value = ''
        doneButton.innerHTML = 'Done';
        deleteButton.innerHTML = 'Delete'


        // Adding id Accordingly
        doneButton.setAttribute('id', 'done-button')
        deleteButton.setAttribute('id', 'delete-button')

        // Appending Childs Accordingly
        createDivElement.appendChild(createHeading);
        const buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('class', 'task-buttons');
        buttonDiv.appendChild(doneButton);
        buttonDiv.appendChild(deleteButton);

        createDivElement.appendChild(buttonDiv)
        // console.log(createDivElement);
        taskDiv.appendChild(createDivElement)

        if (taskDiv.hasChildNodes()) {
            Array.from(taskDiv.childNodes).forEach((element, index) => {
                element.setAttribute('class', `task ${index}`);
                const doneButtons = document.querySelectorAll('#done-button')
                const deleteButtons = document.querySelectorAll('#delete-button')

                doneButtons.forEach(donebutton => {
                    donebutton.addEventListener('click', (e) => {
                        e.stopImmediatePropagation()
                        doneButton.parentElement.parentElement.classList.add('done')
                    })
                })

                deleteButtons.forEach(deletebutton => {
                    deletebutton.addEventListener('click', (e) => {
                        e.stopImmediatePropagation()
                        deleteButton.parentNode.parentNode.parentNode.removeChild(deleteButton.parentNode.parentNode)
                    })
                })
            })
        }
    }
})