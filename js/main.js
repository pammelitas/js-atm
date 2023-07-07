const inputCard = document.querySelector(".atm-system__card");

const screen = document.querySelector(".atm-system__screen");

screen.innerText = "Bienvenido al ATM";

inputCard.addEventListener("click", () => {
    screen.innerText = "Validando tarjeta"
    setTimeout(() => {
        screen.innerText = "Ingrese su pin";
        state = "login";
    }, 3000)
})

window.addEventListener('load', () => {
    screen.innerText = "Bienvenido!"
})

// const key = document.querySelectorAll(".atm-system__keys")

// key[0].addEventListener('click', (event) => {console.log(event.target.id)})

// key[4].addEventListener('click', (event) => {console.log(event.target.id)})

const keys = document.querySelector(".atm-system__card-input-keys");

const validatePin = (pin_keys) => {
    if(pin_keys.length === 4){ // Validamos la longitud del pin
        if(pin_keys.toLocaleString().replaceAll(',' , '') === '0000'){
            // Convertimos el array a string y reemplazamos las , (comas) y validamos que el resultado sea igual a 0000
            screen.innerText = "Pin ingresado es correcto"
        } else{
            console.log(pin_keys)
            screen.innerText = "Pin ingresado es incorrecto" 
        }
        console.log(pin_keys)
    }
}

let pin = []; // La variable va afuera para que guarde todos los inputs en un sólo array y no reinicie la condicional cada vez
let state = '';
keys.addEventListener('click', (event) => {
    if(event.target.id){ // Si tiene id va a entrar
        // Recogemos el valor de el id y hacemos push al array pin
        if(state === 'login' && pin.length <= 4){
            pin.push(event.target.id);
            // Ejecutamos la función para validar el pin
            if(pin.length === 4){
                validatePin(pin)
            }
        }
    } else{
        console.log("Tecla sin función");
    }
}) // El "event" muestra información del evento que estamos llamando en la función


// function awake(parametro){
// 	console.log(parametro)
// }

// const sleep = () => {
// 	console.log("sleep")
// }

// awake("awake");
// sleep();

// function suma (a, b){
//     return a + b
// }

// console.log(suma(2,1));