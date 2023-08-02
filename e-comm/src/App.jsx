import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import PageContainer from "./containers/PageContainer"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Footer from "./components/home/footer/Footer";
function App() {
  

  return (
    <div>
      <PageContainer>
      <Router>
      <Navbar/>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/products/:id" element={<Detail/>}  />
        <Route path="/cart" element={<Cart/>}  />
      </Routes>
      <Footer/>
    </Router>
      </PageContainer>
    
    </div>
  )
}

export default App
