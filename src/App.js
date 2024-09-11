import './App.css';
import Newcomponent from './componentes/Newcomponents';
import View from './ToDoList/View'

function App() {
  console.log("cargando app");

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // const ranNum = Math.random();
  // return <div className = "App"> {ranNum} </div>
  return(
    <div className='App'>
  <Newcomponent></Newcomponent> 
  
  <View></View>
  </div>
  );
  
  
}

export default App;
