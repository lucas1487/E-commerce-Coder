import NavBar from './components/NavBar'
import './App.css'
import CardListContainer from './components/cardsList/CardListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetailContainer from './components/CardDetalContainer/CardDetailContainer';


function App() {
 

  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
      <Route path='/E-commerce-Coder/' element={<CardListContainer/>}/>
      <Route path='/E-commerce-Coder/Categoria/:CategoriaId' element={<CardListContainer />}/>        
       <Route path='/E-commerce-Coder/detalle/:CatalogoId' element={<CardDetailContainer/>}/> 


      </Routes>
   
    </BrowserRouter>
  )
}

export default App
