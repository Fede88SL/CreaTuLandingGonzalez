import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {


  return (
    <>
      <BrowserRouter>

      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer title='Bienvenidos a Indumentaria Lorenzo' />} />
      <Route path={'/product/:itemId'} element={<ItemDetailContainer/>} />
      <Route path={'/category/:categoryId'} element={<ItemListContainer title='Bienvenidos a Indumentaria Lorenzo'/>} ></Route>
      <Route path={'/cart'} element={<h2>Carrito</h2>}> </Route>
      <Route path={'*'} element={<PageNotFound/>}> </Route>
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
