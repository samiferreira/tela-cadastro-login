const a = document.querySelector('#recuperar-a')
const firstForm = document.querySelector('#primeiro-form')
const recuperarForm = document.querySelector('.recuperar')
const cadastro = document.querySelector('.botao')


a.addEventListener('click', (e)=> {
    e.preventDefault()
    
    firstForm.style.display = 'none'
    recuperarForm.style.display = 'block'
});


document.getElementById('.botaoSenha').addEventListener('click', (e)=> {
    // Obtém os valores dos campos de senha
    var senha = document.getElementById('botaoSenha').value;
    var confirmeSenha = document.getElementById('botaoSenha2').value;

    // Verifica se as senhas são iguais
    if (senha !== confirmeSenha) {
        alert("As senhas não correspondem!");
        return;
    }
});

