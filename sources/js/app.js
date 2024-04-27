/**
 * verificador de numero palindromo 5 cifras en adelante 
 * 1- crear function verificadora si es o no un palindromo
 * 2- crear variables que agreguen y modifiquen el dom  
*/

window.onload = ()=> {
    const prompName = prompt('Bienvenido al verificador de palindromos cual es tu nombre').toUpperCase();
    const nGamer = document.getElementById('name').innerText = prompName
}


//paso 1 ok
const numPal = (num) => {
    
    num = prompt('Ingresa por favor un numero mayor a 5 cifras ').toLowerCase();
    
    let strNum = Number(num);
    
    if(typeof strNum === 'number' && num.length >= 5){
        //conversion tipo de dato
        let strPal = strNum.toString().split('').reverse().join('');

        if(strPal === num){
            alert('es un palindromo');
        } else {
            alert('no es un palindromo');
        }
    } else {
        alert(`el numero ${num} no tiene 5 cifras`);
    }
}



