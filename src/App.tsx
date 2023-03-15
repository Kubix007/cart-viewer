import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddCart from "./pages/AddCart";
import Dashboard from "./pages/Dashboard";
import * as Styles from "./App.styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { getAllProducts } from "./features/products/productsSlice";
import { getAllCarts } from "./features/carts/cartsSlice";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarts());
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <Styles.App>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addcart" element={<AddCart />} />
        </Routes>
      </Router>
    </Styles.App>
  );
}

export default App;
