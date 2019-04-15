// grab DOM elements
const form = document.querySelector('.enterInfo');
const nameInput = document.querySelector('#nameField');
const emailInput = document.querySelector('#emailField');
const peopleList = document.querySelector('#peopleList');

// add functionality to the form
form.addEventListener('submit', (e) => {
    // override the default submit functionality
    e.preventDefault();

    /* check to see if both fields are filled out, alert use if not
    if both fields are filled out, then add the data to the list */
    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please fill out both the name and email fields!');
    } else {
        // create a list element with the data entered
        dataEntry = document.createElement('li');
        dataEntry.appendChild(document.createTextNode(`${nameInput.value} : `
            + `${emailInput.value}`));

        // add the list element to the list
        peopleList.appendChild(dataEntry);

        // clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
});
