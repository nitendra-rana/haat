import './App.css';
import Products from './Pages/Products';
import {Route, Routes} from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Fav from './Pages/Fav';


function App() {
  return (
    <div className="container mx-auto">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Products/>}></Route>
        <Route path='/:category_id' element={<Products/>}></Route>
        <Route path='/product/:product_id' element={<ProductDetail/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/fav' element={<Fav/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
