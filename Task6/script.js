const form = document.getElementById('myForm');

form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (nameInput.value === '') {
    alert('Please enter your name');
    return;
  }
  if (emailInput.value === '') {
    alert('Please enter your email');
    return;
  }
  if (passwordInput.value === '') {
    alert('Please enter your password');
    return;
  }

form.submit();
}