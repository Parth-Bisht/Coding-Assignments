import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RequiredAuth from "./components/RequiredAuth";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Mens from "./pages/Mens";
import Multiproduct from "./pages/Multiproduct";
import Singleproduct from "./pages/Singleproduct";
import Womens from "./pages/Womens";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="aboutus" element={<AboutUs />}></Route>
        <Route path="contactus" element={<ContactUs />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        ></Route>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="men" element={<Mens />}></Route>
        <Route path="men/:xyz" element={<Multiproduct />}></Route>
        <Route path="men/:xyz/:id" element={<Singleproduct />}></Route>
        <Route path="women" element={<Womens />}></Route>
        <Route path="kids" element={<Kids />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
