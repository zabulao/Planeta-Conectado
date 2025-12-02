const form = document.getElementById("formCadastro");
const msg = document.getElementById("mensagem");

const regexMaiuscula = /[A-Z]/;
const regexNumero = /[0-9]/;
const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.querySelector("input[name='nome']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const senha = document.getElementById("senha").value;

    let erros = [];

    if (!nome) erros.push("Preencha o campo Nome.");
    if (!email) erros.push("Preencha o campo E-mail.");
    if (!senha) erros.push("Preencha o campo Senha.");

    if (senha) {
        if (senha.length < 8) erros.push("A senha deve ter no mínimo 8 caracteres.");
        if (!regexMaiuscula.test(senha)) erros.push("A senha deve conter pelo menos UMA letra maiúscula.");
        if (!regexNumero.test(senha)) erros.push("A senha deve conter pelo menos UM número.");
        if (!regexEspecial.test(senha)) erros.push("A senha deve conter pelo menos UM caractere especial.");
    }

    if (erros.length > 0) {
        msg.style.color = "red";
        msg.innerHTML = erros.join("<br>");
        return;
    }

    // 👉 SALVAR O USUÁRIO NO LOCAL STORAGE
    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    msg.style.color = "green";
    msg.innerText = "Cadastro realizado com sucesso! Agora você já pode fazer login.";
});

const toggleSenha = document.getElementById("toggleSenha");
const senhaInput = document.getElementById("senha");

toggleSenha.addEventListener("click", function() {
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        toggleSenha.classList.remove("bi-eye");
        toggleSenha.classList.add("bi-eye-slash");
    } else {
        senhaInput.type = "password";
        toggleSenha.classList.remove("bi-eye-slash");
        toggleSenha.classList.add("bi-eye");
    }
});

