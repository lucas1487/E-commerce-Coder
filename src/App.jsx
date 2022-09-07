import NavBar from "./components/NavBar";
import "./App.css";
import CardListContainer from "./components/cardsList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetailContainer from "./components/CardDetalContainer/ItemDetailContainer";
import CartContext from "./components/CartContext";
import { NotificacionProvider } from "./components/Notification";
import CarListContainer from "./components/CarListContainer";
import OrdenCompra from "./components/OrdenCompra";
import CartFormCli from "./components/CartFormCli";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
function App() {
  return (
    <NotificacionProvider>
      <CartContext>
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
            <Route path="/E-commerce-Coder/contacto" element={<Contacto />} />
            <Route
              path="/E-commerce-Coder/Cart/"
              element={<CarListContainer />}
            />
            <Route
              path="/E-commerce-Coder/Cart/Generarcompra/"
              element={<CartFormCli />}
            />
            <Route
              path="/E-commerce-Coder/Cart/OrdenCompra/:ordenPage"
              element={<OrdenCompra />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext>
    </NotificacionProvider>
  );
}

export default App;
