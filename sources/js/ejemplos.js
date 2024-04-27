/**
 * CREAREMOS UN FORMULARIO
 * PERO DE UNA MANERA ALGO DIFERENTE 
 * YA QUE NO UTILIZAREMOS DE ENTRADA EL CREATELEMENT SI NO MAS
 * BIEN UTILIZAREMOS UNA FUNCION.
 * VEAMOS:
*/

let validate = data => {
    //creamos una variable y le asignamos un objeto vacio
    let errors = {};
    //verificacion si existe propiedad con datos tanto name como lastname 
    if(!data.name){
        errors.name = 'Campo obligatorio';
    }
    if(!data.lastname){
        errors.lastname = 'Campo obligatorio';
    }
    //retornamos el objeto.
    return errors;
} 

//valores iniciales
let initialValues =  {
    name: '',
    lastname: '',
}
	
let render = ({ data, errors }) => {
    return`
        <form name='formulario'>
            <div>
                <label>Nombre:</label>
                <input name='name' value='${data.name}'/>
                ${errors.name || ''}
            </div>
            <div>
                <label>Apellido:</label>
                <input name='lastname' value='${data.lastname}'/>
                ${errors.lastname || ''}
            </div>
            <div>
            <button type='submit'>Enviar</button>
            </div>
        </form>
    `;
}

//Aqui creamos y agregamos el formulario al body
let form = document.createElement('form');
form.innerHTML = render({ data:initialValues, errors:{} });
document.body.append(form);


/**
 * Ahora lo que necesitamos hacer es que cada vez que este formulario sea enviado,
 * o se intente enviar, debemos preevenir su comportamiento por defecto,
 * Tomar todos los datos que se encuentran en los campos y validarlos y dependiendo del 
 * resultado de esta validacion, le mostramos un error al usuario o si vamos a guradarlo dentro
 * de nuestra ApI o nuestra base de datos. 
 */

form.addEventListener('submit', e => {
    //prevenimos su comportamiento
    e.preventDefault();

    //capturamos el evento
    //podemos iterar a todos los elementos del formulario con elements de la siguiente forma
    let data = Array.from(e.target.elements).reduce((acc, el) => {
            //verificamos si el campo que se le hace click no sea un string vacio
            if(!el.name) return acc;
            //aqui accedemos a la propiedad name del elemento html y la igualamos
            //al valor del campo de input
            acc[el.name] = el.value;
            //retornamos el acc con el nuevo dato qu obtuvimos del value.
            return acc;
    }, {});
    

            //ahora validaremos que los datos sean correctos
            // y capturaremos los errores en la siguiente constante, 
            //la funcion validate se crea al inicio del codigo 
            const errors = validate(data);
            
            //validamos que el objeto de errores contiene por lo menos un error
            if(Object.keys(errors).length > 0){
                let html = render({ errors, data });
                form.innerHTML = html;
                return;
            }

            //ahora enviamos los datos de nuestro formulario a un servidor
})







