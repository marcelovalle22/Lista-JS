function check () {
    let string = document.getElementById('string').Value;
    let invertido = string.split('').reverse().join ('');

    if (string == invertido){
        document.writeln('É um palindromo');
    }else {
        document.writeln('Não é um palíndrmo!');
    }
}