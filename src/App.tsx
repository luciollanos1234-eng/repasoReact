import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProductoDetalle from "./pages/ProductoDetalle"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/Login" element={<Login />} />

        <Route
          path="/products/:id"
          element={<ProductoDetalle />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
