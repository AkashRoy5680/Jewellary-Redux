import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
  <div className="App">

  <Header></Header>
  <Routes>
    <Route path="/" element={<ProductListing></ProductListing>}></Route>
    <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
    <Route>404 not Found !!! </Route>
    </Routes>

    </div>
  );
}

export default App;
