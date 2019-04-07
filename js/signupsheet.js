// grab DOM elements
const form = document.querySelector('.enterInfo');
const inputName = document.querySelector('#nameField');
const inputEmail = document.querySelector('#emailField');
const peopleList = document.querySelector('#peopleList');

// add functionality to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputName.value === '' || inputEmail.value === '') {
        alert('Please fill out both fields');
    } else {
        // create a new list element
        nameAndEmail = document.createElement('li');
        nameAndEmail.appendChild(document.createTextNode(`${inputName.value} : ${inputEmail.value}`))

        // add the list element to the list of people
        peopleList.appendChild(nameAndEmail);

        // clear fields
        inputName.value = '';
        inputEmail.value = '';
    }
});
