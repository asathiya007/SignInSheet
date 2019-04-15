// grab the DOM elements
const form = document.querySelector('.enterInfo');
const nameInput = document.querySelector('#nameField');
const emailInput = document.querySelector('#emailField');
const peopleList = document.querySelector('#peopleList');

// add functionality to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    /* if either the name or email fields are empty, alert the user,
    otherwise, add the entry to the list */
    if (nameInput.value === '' || emailInput === '') {
        alert('Please fill out both name and email input fields')
    } else {
        // create a list element
        nameEmailPair = document.createElement('li');
        // nameEmailPair.appendChild(document.createTextNode(nameInput.value + ' ' + emailInput.value));
        nameEmailPair.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // add the list element to the list of people
        peopleList.appendChild(nameEmailPair);

        // clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
})
