import ProductList from "./ProductList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <a href="/checkout">shopping cart1A </a>

      <Link to="/"> HomePage10</Link>
      <Link to="/product"> Info about product</Link>
      <Link to="/checkout"> shopping cartLink</Link>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<ProductDetail />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<p>Can't find the page</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
