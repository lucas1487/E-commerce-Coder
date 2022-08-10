import NavBar from "./components/NavBar";
import "./App.css";
import CardListContainer from "./components/cardsList/CardListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetailContainer from "./components/CardDetalContainer/CardDetailContainer";
import { CarProvider } from "./components/CartContext";

function App() {
  return (
    <CarProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/E-commerce-Coder/" element={<CardListContainer />} />
          <Route
            path="/E-commerce-Coder/Categoria/:CategoriaId"
            element={<CardListContainer />}
          />
          <Route
            path="/E-commerce-Coder/detalle/:detalleId"
            element={<CardDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </CarProvider>
  );
}

export default App;
