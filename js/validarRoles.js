const route = window.location.pathname.split('/').pop()
const role = localStorage.getItem('role')

console.log(route)
console.log(window.routes[role])


if (route !== window.routes[role]){
    alert("No tienes permitido el acceso a esta pagina")
    localStorage.clear()
    window.location.href = 'login.html'
}
