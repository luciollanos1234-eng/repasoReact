import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import { Login } from "./pages/Login"
import ProductoDetalle from "./pages/ProductoDetalle"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/products/:id" element={<ProductoDetalle />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
