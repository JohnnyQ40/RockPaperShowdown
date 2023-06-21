document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
    async function loginFormHandler(event) {
        event.preventDefault();

    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
            if (response.ok) {
                console.log('logged in');
                window.location.href = '/roomCreation';
            } else {
                console.log('cant login')
            }
    }
}