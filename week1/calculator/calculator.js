const input= document.getElementById('input');
function add(num){
  input.value=input.value +num;
}

function cal(){
    input .value= eval (input.value);
}

function c(){
    input.value = '';
}