/**
 * verificador de numero palindromo 5 cifras en adelante 
 * 1- crear function verificadora si es o no un palindromo
 * 2- crear variables que agreguen y modifiquen el dom  
*/


const numPal = (num) => {
    let strNum = Number(num);
    if(typeof strNum === 'number' && num.length >= 5){
        //conversion tipo de dato
        let strPal = strNum.toString().split('').reverse().join('');

        if(strPal === num){
            console.log(`El numero ${num}, SI es un palindromo`)
            //parrafo que muestre si es o no un palindromo
            return document.getElementById('respuesta').innerHTML = `Si es un palindromo...!`;
        } else {
            console.log(`El numero ${num}, NO es un palindromo`)
            return document.getElementById('respuesta').innerHTML = `No es un palindromo...!`;
        }
    } else {
        return document.getElementById('respuesta').innerHTML = `Le faltan cifras o no es un numero...!`;
    }
}

const idInputPal = document.getElementById('inpPal');
const idBtnPal = document.getElementById('btnPal');

idInputPal.addEventListener('change', (e) => {
    e.preventDefault();
    numPal(e.target.value)
})






























