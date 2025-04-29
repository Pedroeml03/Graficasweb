function login() {
    alert("Iniciando sesión...");

    window.location.href="Iniciar.html"
}
function redirectToRegister() {
    window.location.href = "Registro.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const bombas = document.querySelectorAll('.bomba');

    bombas.forEach(bomba => {
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        bomba.style.left = `${posX}px`;
        bomba.style.top = `${posY}px`;
    });
});