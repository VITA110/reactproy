// Seccion de imports
import {useState } from "react"; 
//Seccion global, declaracion de variables, funciones, metodos etc...
const users = {
    name: "Juan",
    age: 19,
};

// Declaracion de la funcion de mi componente (estas son las diferentes formas de declarar una funcion)
function Newcomponent(){
// Scope de la funcion del componente, declara variables, funciones
//HOOKS- Son funciones especificadas de react para trabajar con estados y eventos
const [counter, setCounter] = useState(0);

    // let counter = 0;
    console.log("Hola funcion upCounter");
    function upCounter() {
        
        setCounter(counter + 1);
        console.log("Incrementado "+counter)
    }
    // Retorno base de la funcion, debe ser JSX para que readct detecte y pueda trabajar ccomo componente
    // Para regeresar JSX, necesitamos abrir parentesis(o solo tener un elemento como el siguiente)

    return (
        <div>
        <p>{users.name}</p>
        <spam> {counter} </spam>
        <button onClick={upCounter}>Incrementa </button>
        </div>
    );
}

export default Newcomponent;
// Declaracion de exportacion, comunmento una por archivos si se tiene un componente, en el caso de livrerias
// Se utilizan las necesarias

//Esto quien sabe que sea pero ahi esta const Button = ({ texto }) => {} 




// const Newcomponent2 = () => {
    
// }
// const Newcomponent3 = function (){

// }