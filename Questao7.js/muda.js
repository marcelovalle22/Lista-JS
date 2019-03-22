function cadastrar() {
    let name1 = document.getElementById('nome1').value;
    let name2 = document.getElementById('nome2').value;
    let name3 = document.getElementById('nome3').value;
    let name4 = document.getElementById('nome4').value;
    let name5 = document.getElementById('nome5').value;
    
    let array = new Array();
    array.push(name1, name2, name3, name4, name5);

    nome1 = document.getElementById('name1').value = array[4];
    nome2 = document.getElementById('name2').value = array[3];
    nome3 = document.getElementById('name3').value = array[2];
    nome4 = document.getElementById('name4').value = array[1];
    nome5 = document.getElementById('name5').value = array[0];
}