function validateForm() {
    let valid = true;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (fullName.length < 5) {
      showError('fullName', 'Name must be at least 5 characters long.');
      valid = false;
    } else {
      hideError('fullName');
    }

    if (!email.includes('@')) {
      showError('email', 'Please enter a valid email.');
      valid = false;
    } else {
      hideError('email');
    }
  
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '1234567890' || !phone.match(phonePattern)) {
      showError('phone', 'Phone number should be a 10-digit number, not 123456789.');
      valid = false;
    } else {
      hideError('phone');
    }
  
    if (password.length < 8 || password === 'password' || password === fullName) {
      showError('password', 'Password must be at least 8 characters long, and not "password".');
      valid = false;
    } else {
      hideError('password');
    }
  
    if (password !== confirmPassword) {
      showError('confirmPassword', 'Passwords must match.');
      valid = false;
    } else {
      hideError('confirmPassword');
    }
  
    return valid;
  }
  
  function showError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    inputField.classList.add('is-invalid');
    const errorMessage = inputField.nextElementSibling;
    errorMessage.innerHTML = message;
  }
  
  function hideError(fieldId) {
    const inputField = document.getElementById(fieldId);
    inputField.classList.remove('is-invalid');
  }