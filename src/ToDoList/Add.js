// imports
import 'TODOList.css';
// Variables 

function Add(){

    return (
        <div>
            <form>
            <label for="task">
            <input id="task" type="text" placeholder="Ingresa una tarea:"></input>
            <button id="buttonTask">Add Task</button>
            </label>
            </form>
        </div>      
    );
}

export default Add;

