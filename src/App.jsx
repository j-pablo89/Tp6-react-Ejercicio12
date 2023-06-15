import './App.css'
import Formulario from './components/Formulario'
import Titulo from './components/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className='text-center pt-4'>
     <Titulo></Titulo>
     <Formulario></Formulario>
    </div>
  )
}

export default App
