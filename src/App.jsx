//Nucleo de mi proyecto
//Une los componenetes

//import './App.css'
import Header from "./componentes/Header"
import ListadoPacientes from "./componentes/ListadoPacientes"
import Error from './componentes/Error'
import Paciente from './componentes/Paciente'
import Formulario from "./componentes/Formulario"

function App() {

  return (
    <>
    <Header/>
    <ListadoPacientes/>
    <Error/>
    <Paciente/>
    <Formulario/>
    
      

    </>
  )
}

export default App
