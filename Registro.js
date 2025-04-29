function register() {
    alert("Usuario Registrado");
    window.location.href = "Login.html";
}

// Este es el nuevo botón personalizado de Facebook

document.addEventListener("DOMContentLoaded", function() {
    const bombas = document.querySelectorAll('.bomba');

    bombas.forEach(bomba => {
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        bomba.style.left = `${posX}px`;
        bomba.style.top = `${posY}px`;
    });
});
