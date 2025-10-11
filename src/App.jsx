import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Noticias from './pages/Noticias';
import NoticiasDetail from './pages/NoticiasDetail';
import Contacto from './pages/Contacto';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Products />} />
        <Route path="/proyectos/:id" element={<ProductDetail />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<NoticiasDetail />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App
