document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordLink = document.getElementById('togglePassword');
    const passwordField = document.getElementById('passwordField');

    if (togglePasswordLink && passwordField) {
      togglePasswordLink.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        if (passwordField.type === 'password') {
          passwordField.type = 'text';
        } else {
          passwordField.type = 'password';
        }
      });
    }
  });