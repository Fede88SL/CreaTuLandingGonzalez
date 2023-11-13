import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      
      <ItemListContainer title='Bienvenidos a Indumentaria Lorenzo' />
    </>
  )
}

export default App