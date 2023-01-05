// Validate email input in form

const validateEmail = (inputElement) => {
  const username = inputElement.value.split('@')[0];
  const emailRegex = /^[a-z_.\-|1-9]+$/;
  return emailRegex.test(username);
};

const showMessage = (message, element, email) => {
  const correctEmail = email.toLowerCase();
  message += ` Did you mean this? ${correctEmail}`;
  element.innerText = message;
};

// Disable hidden required fields in order to submit
const toggleDisableFields = () => {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const fullName = document.querySelector('#name');
  if (window.innerWidth <= 992) {
    firstName.setAttribute('disabled', true);
    lastName.setAttribute('disabled', true);
    fullName.removeAttribute('disabled');
  } else {
    firstName.removeAttribute('disabled');
    lastName.removeAttribute('disabled');
    fullName.setAttribute('disabled', true);
  }
};

// In order to disable the hidden fields
window.addEventListener('resize', toggleDisableFields);
window.addEventListener('load', toggleDisableFields);

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  const emailInput = document.querySelector('#email');
  const isValid = validateEmail(emailInput);
  if (!isValid) {
    e.preventDefault();
    const msgErrorOutContainer = document.querySelector('#warnings');
    showMessage(
      'Please enter your email in lower-case letters.',
      msgErrorOutContainer,
      emailInput.value,
    );
    return false;
  }
  return true;
});
