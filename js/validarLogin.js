if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html'
}

const username = localStorage.getItem('username')

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('mensaje').innerText = `Bienvenido, ${username}!`
});