const form = document.getElementById('contactForm');
const inputs = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  message: document.getElementById('message')
};

const errors = {
  name: document.getElementById('nameError'),
  email: document.getElementById('emailError'),
  message: document.getElementById('messageError')
};

const successMessage = document.getElementById('successMessage');

// Load form data from localStorage
Object.keys(inputs).forEach(key => {
  const saved = localStorage.getItem(key);
  if (saved) inputs[key].value = saved;
});

// Save form data to localStorage
Object.keys(inputs).forEach(key => {
  inputs[key].addEventListener('input', () => {
    localStorage.setItem(key, inputs[key].value);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  // Reset error states
  Object.values(errors).forEach(el => {
    el.textContent = '';
    el.classList.remove('show');
  });

  successMessage.textContent = '';
  successMessage.classList.remove('show');

  // Validate inputs
  if (inputs.name.value.trim() === '') {
    errors.name.textContent = 'Name is required.';
    errors.name.classList.add('show');
    isValid = false;
  }

  const emailVal = inputs.email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailVal === '') {
    errors.email.textContent = 'Email is required.';
    errors.email.classList.add('show');
    isValid = false;
  } else if (!emailRegex.test(emailVal)) {
    errors.email.textContent = 'Invalid email format.';
    errors.email.classList.add('show');
    isValid = false;
  }

  if (inputs.message.value.trim() === '') {
    errors.message.textContent = 'Message is required.';
    errors.message.classList.add('show');
    isValid = false;
  }

  // Show success message and auto-clear
  if (isValid) {
    successMessage.textContent = 'Message submitted successfully! 🎉';
    successMessage.classList.add('show');

    form.reset();
    Object.keys(inputs).forEach(key => localStorage.removeItem(key));

    // ⏳ Auto-hide after 3 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
      successMessage.textContent = '';
    }, 3000);
  }
});