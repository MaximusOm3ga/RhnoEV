import "./App.css";
import ProductsPage1 from "./components/Products/Products1";
import ProductsPage2 from "./components/Products/Products2";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/Footer"
import MainPage from "./components/home";
import ContactUs from "./components/Contact"; 
import AboutUs from "./components/about";
import Layout from "./Layout";
import ScrollableComponent from "./components/TestScroll";
function App(){
  return(
     <Routes>
        <Route path="/" element={<MainPage/>} />
       <Route path="about" element={<AboutUs />}/>
       <Route path="products" element={<ProductsPage1 />} />
       <Route path="contact" element={<ContactUs />} />
       <Route path="test" element={<ScrollableComponent/>}/>
     </Routes>
  )
}

export default App;