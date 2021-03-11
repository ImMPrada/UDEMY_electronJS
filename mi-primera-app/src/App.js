import logo from './logo.svg';
import './App.css';
import Saludar, { ButtonSaludar } from './components/Saludar'

function App() {

  const user = {
    nombre : "Simelomon",
    apellido : "Tolomeo",
    hobbies : ["hobbie 1", "Hobbie 2", "Hobbie 3", "Hobbie 4"]
  }

  const saludar = () => {
    console.log("hola")
    alert("hola hola")
  }

  return (
    <div className="App">
        <Saludar userInfo={user}/>
        <ButtonSaludar saludarFn={saludar}/>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

export default App;
