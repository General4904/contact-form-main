// Script goes here
console.log ('Hello World');

const theForm = document.getElementById('contact');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const listItem = document.getElementById('first-name-error');
const secondListItem = document.getElementById('last-name-error');
const newPara = document.createElement('p');

theForm.addEventListener('submit', function (event){
    event.preventDefault();

    const nameInput = document.getElementsByClassName('name-field');
    let valid = true;
    const namePattern = /^[A-Za-z]+$/;

    if (firstname.value === '' || firstname !== namePattern) {
        listItem.appendChild(newPara);
        newPara.innerHTML = `This field is required`;
        newPara.style.color = `red`;
        newPara.style.display = `block`;
        firstname.focus();
    }

    // else if (lastname.value === ''){
    //     secondListItem.appendChild(newPara);
    //     newPara.innerHTML = `This field is required`;
    //     newPara.style.color = `red`;
    //     newPara.style.display = `block`;
    //     lastname.focus();
    // }

    else {
        alert(`Success`)
    }
})

                

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInputs = document.querySelectorAll('input[type="text"]');
    let valid = true;
    const namePattern = /^[A-Za-z]+$/;

    for (let i = 0; i < nameInputs.length; i++) {
        const input = nameInputs[i];
        const value = input.value.trim();

        if (value === '') {
            valid = false;
            alert(`Name ${i + 1} is required.`);
            input.focus();
            break;
        } else if (!namePattern.test(value)) {
            valid = false;
            alert(`Name ${i + 1} must contain only letters.`);
            input.focus();
            break;
        }
    }

    if (valid) {
        alert('Form is valid. Submitting...');
        // Uncomment the line below to actually submit the form
        // event.target.submit();
    }
});
*/








function test() {
    alert('Hello World')
}