document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const togglePassword = document.getElementById('togglePassword');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        if (username.value === 'admin' && password.value === 'password123' || username.value === 'Preetham'  && password.value === 'root') {
            alert("Login successful! \nPlease return to the home page");
            errorMessage.style.display = 'none';
        } else {
            errorMessage.textContent = 'Invalid username or password!';
            errorMessage.style.display = 'block';
        }
    });

    togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️‍🗨️' : '🔒';
    });

    password.addEventListener('mouseover', function() {
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Password should contain at least one uppercase letter, one lowercase letter, a number, a special character, and be at least 8 characters long.';
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = '#333';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.fontSize = '12px';
        tooltip.style.top = '50px';
        tooltip.style.left = '20px';
        tooltip.id = 'password-tooltip';
    
        this.parentNode.appendChild(tooltip);
    });

    password.addEventListener('mouseout', function() {
        const tooltip = document.getElementById('password-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});