   
    var usuario = document.getElementsByName('Username') [0].value;
    var senha = document.getElementsByName('password')[0].value;
    var confirmar = document.getElementsByName('Confirm')[0].value;

function validar {
    var nome = formulario.nome.value;
    var senha = formulario.senha.value;
    var rep_senha = formulario.rep_senha.value;
}
if (usuario == "bcf" && senha == "bcf"){
    window.location = "index.html";
    done = 1;
}
if (done == 0)
    alert("Dados incorretos, tente novamente");
}    

