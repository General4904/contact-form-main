// Script goes here
console.log("Hello World");

const theForm = document.getElementById("contact");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const listItem = document.getElementById("first-name-error");
const secondListItem = document.getElementById("last-name-error");
const mail = document.getElementById("mail");
const newPara = document.createElement("p");
const _mail = document.getElementById("mailing");
const radioCheck = document.getElementById("radio");
const message = document.getElementById("messageSent");
const messageSection = document.getElementById("message");
const lastSection = document.getElementById("consent");
newPara.style.display = "block";

theForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  // Firstname Validation
  const nameValue = firstname.value;
  if (nameValue === "") {
    firstname.scrollIntoView({ behavior: "smooth" });
    firstname.style.borderColor = "red";
    listItem.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = "This field is required";
    return false;
  } else if (nameValue.length < 3) {
    firstname.scrollIntoView({ behavior: "smooth" });
    firstname.style.borderColor = "red";
    listItem.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = "Firstname must be more than three characters";
    return false;
  }

  // Lastname validation
  const secondname = lastname.value;
  if (secondname === "") {
    lastname.scrollIntoView({ behavior: "smooth" });
    lastname.style.borderColor = "red";
    secondListItem.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = "This field is required";
    return false;
  } else if (secondname.length < 3) {
    lastname.scrollIntoView({ behavior: "smooth" });
    lastname.style.borderColor = "red";
    secondListItem.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = "Firstname must be more than three characters";
    return false;
  }

  // Email Validation
  const mailValue = mail.value;
  const mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (mailValue === "") {
    mail.scrollIntoView({ behavior: "smooth" });
    mail.style.borderColor = "red";
    _mail.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = "Email is required";
    return false;
  } else if (!mailPattern.test(mailValue)) {
    mail.scrollIntoView({ behavior: "smooth" });
    mail.style.borederColor = "red";
    _mail.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = "Please enter a valid email";
    return false;
  }

  // Radio button validation
  const radioButton = document.getElementsByName("query");
  let querySelected = false;
  for (let i = 0; i < radioButton.length; i++) {
    if (radioButton[i].checked) {
      querySelected = true;
      break;
    }
  }

  if (!querySelected) {
    radioCheck.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = "Please select a query";
    radioCheck.scrollIntoView({ behavior: "smooth" });
    return false;
  }

  // Message section validation
  const messageValue = messageSent.value;
  if (messageValue === "") {
    messageSent.scrollIntoView({ behavior: "smooth" });
    messageSent.style.borderColor = "red";
    messageSection.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = "This field is required";
    return false;
  }

  // Checkbox section
  const checkbox = document.getElementsByName("consent");
  let checkboxSelected = false;

  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkboxSelected = true;
      break;
    }
  }

  if (!checkboxSelected) {
    lastSection.appendChild(newPara);
    newPara.style.color = "red";
    newPara.innerHTML = `To submit this form, please consent to being contacted`;
    return false;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  showDialog();
  theForm.onsubmit();
}

function showDialog() {
  let show = document.getElementById("scroll");
  let dialog = document.getElementById("overlay");
  dialog.style.display = "block";
}

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
            input.scrollIntoView({ behavior: "smooth" });
            break;
        } else if (!namePattern.test(value)) {
            valid = false;
            alert(`Name ${i + 1} must contain only letters.`);
            input.scrollIntoView({ behavior: "smooth" });
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
  alert("Hello World");
}
