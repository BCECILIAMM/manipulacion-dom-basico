const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
// const p = document.querySelector('p');
// const parrafo = document.querySelector('.parrafo');
// const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafo,
//     pid,
//     input
// });

// h1.innerHTML = 'Patito <br> Feo'; // NOS PERMITE MODIFICAR EL TEXTO QUE ESTE DENTRO DE NUESTRAETIQUETA
// h1.innerText = 'Patito <br> Feo'; // Se muestra el texto
// // DIFERENCIAS: innerHTML = convierte todo a HTML e innerText a texto
// // Ayuda a leer el atributo que tenga nuestro elemento
// console.log(h1.getAttribute('pantalla'));
// console.log(h1.getAttribute('class')); // imprimiento una clase
// // h1.setAttribute('innerHTML'); // es para modificar esa clase
// h1.setAttribute('class', 'rojo'); // es para modificar esa clase

// // FUNCIONA CON LAS CLASES
// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // input.value = "45656"; // se puede entrar directamente al valor para actualizar

// // funcion especial
// console.log(document.createElement("img")); // SE CREO UNA IMAGEN
// const img = document.createElement("img");
// img.setAttribute('src', 'https://medialab.news/wp-content/uploads/2021/03/Captura-de-pantalla-2021-03-24-a-las-16.19.35.png'); // SE AGREGARON LOS ATRIBUTOS
// // console.log(img);
// pid.append(img);// funcionan igual 
// pid.appendChild(img); // agregan el elemento despues del contenido que tuvier nuestro parrafo
// pid.innerHTML = img; // se tradujo se convirtio en string y quisi agregarlo solo el txto




// SE TIENEN QUE ESCUCHAR LOS EVENTOS
// onChage es para escuchar cuando los usuarios terminaron de escribir 
// onClick se ejecuta el codigo de javascript o una funcion para que se ejecute y haga su funcion

function sumar(event) {
    console.log({ event });
    event.preventDefault(); // se le agrega el precenDefault para que el addEvenListener pueda leerlo y no se borre su valor  en el formulario
    console.log('escuchando el venento del click');
    const suma = input1.value + input2.value;
    pResult.innerText = "Resultado: " + suma;
}

// ADDEVENTLISTENER
// el btnOnclic no se debe poner los parentesis()
// OnClick:lo que hacía el otro onclic cuando se hacia clic mandaba a llamar la funcion
// addEventListener: primero saber de cual elentento html se esta hablando 
// luego se tiene que decir cual de todos los posibles eventos se tendría que escuchar 
// y luego quiere saber cuál es la funcion que debe mandar a llamar

// btn.addEventListener('click', btnOnClick)

// FORM 
// los form tranforman el boton como si fueran un submit

form.addEventListener('submit', sumar);