import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Dealership from './Pages/Dealership';
import Feedback from './Pages/Feedback';
import Products from './Pages/ProductPage';
import Contact from './Pages/Contact';
import Product from './Components/Products/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/dealership" element={<Dealership />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
