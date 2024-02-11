import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Cart } from "./pages/cart/cart";
import { ProductContextProvider } from "./context/product-context";
import { Profile } from "./pages/profile/profile";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
