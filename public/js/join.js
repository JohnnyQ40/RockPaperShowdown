document.querySelector('.join-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username-join').value.trim();
    const password = document.getElementById('password-join').value.trim();

    if (username && password) {
        const requestConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        fetch('/join', requestConfig)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.message === 'User registered!') {
                    alert('User registration successful');
                } else {
                    alert('Error: ' + data.error);
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert('Please fill out the fields!');
    }
});