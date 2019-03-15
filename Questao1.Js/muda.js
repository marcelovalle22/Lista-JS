function muda(cor) {
       
    switch(cor){
            
      case 'verde': 
      document.getElementById('color').style.backgroundColor = 'green';
      break;

      case 'vermelho':
      document.getElementById('color').style.backgroundColor = 'red';
      break;

      case 'amarelo':
      document.getElementById('color').style.backgroundColor = 'yellow';
      break;

      case 'Cinza':
      document.getElementById('color').style.backgroundColor = 'silver';
      break;

      case 'azul':
      document.getElementById('color').style.backgroundColor = 'blue';
      break;
        }
}