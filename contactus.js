const form = document.getElementById('contact-form');
const successMessage = document.querySelector('.success-message');
const messageTextarea = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  // Reset error messages
  document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

  // Validate name
  const name = document.getElementById('name');
  if (!name.value.trim()) {
    name.nextElementSibling.style.display = 'block';
    isValid = false;
  }

  // Validate email
  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value)) {
    email.nextElementSibling.style.display = 'block';
    isValid = false;
  }

  // Validate message
  if (!messageTextarea.value.trim()) {
    messageTextarea.nextElementSibling.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    successMessage.style.display = 'block';
    form.reset();
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }
});

// Auto-resize textarea
messageTextarea.addEventListener('input', () => {
  messageTextarea.style.height = 'auto';
  messageTextarea.style.height = messageTextarea.scrollHeight + 'px';
});
