const form = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const senha = document.getElementById("senha");

// 👁 Mostrar / ocultar senha
togglePassword.addEventListener("click", () => {
    if (senha.type === "password") {
        senha.type = "text";
        togglePassword.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        senha.type = "password";
        togglePassword.classList.replace("bi-eye-slash", "bi-eye");
    }
});

// 🔑 Validar login
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senhaUser = senha.value;

    const user = JSON.parse(localStorage.getItem("usuario"));

    if (!user) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    if (email === user.email && senhaUser === user.senha) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("logado", "true");
        window.location.href = "forum.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
