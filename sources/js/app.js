/**
 * verificador de numero palindromo 5 cifras en adelante 
 * 1- crear function verificadora si es o no un palindromo
 * 2- crear variables que agreguen y modifiquen el dom  
*/
//FUNCIONES
const idRespuesta = document.getElementById('respuesta');

const numPal = (n) => {
    
    
    if(n.length >= 5){
      
        let strPal = n.toString().split('').reverse().join('');
    
        if(Number(n) === Number(strPal)){

            return idRespuesta.innerHTML = `<strong class='bg-success fw-bolder text-light border border-black rounded p-2'>
                                            ${n}</strong> SI ES UN PALINDROMO...!`;
        
        }else if(Number(n) !== Number(strPal)){
        
            return idRespuesta.innerHTML = `<strong class='bg-warning fw-bolder text-dark border border-black rounded p-2'>
                                            ${n}</strong> NO ES UN PALINDROMO...!`;
        
        } 
    } else if (n.length > 1 && n.length < 5){
        return idRespuesta.innerHTML = `<strong class='bg-danger text-light border border-black rounded p-2'>
                                        ${n}</strong> LE FALTAN NUMEROS A TU PALINDROMO...!`;
    } else if(n.length <= 1){
        return idRespuesta.innerHTML = `<strong class='p-2 rounded fw-bolder bg-secondary text-dark'> ESCRIBE TU PALINDROMO...! </strong>`;
    }
}


const namePromp = () => {
    let name = prompt('Cual es tu nombre ?');
    return name.toUpperCase();
}

const idInputPal = document.getElementById('inpPal');
const idName = document.getElementById('name');
idName.innerText = namePromp();


//EVENTOS
idInputPal.addEventListener('change', (e) => {
    e.preventDefault();
    numPal(e.target.value)
})






























