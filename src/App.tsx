import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import CartDetails from "./pages/CartDetails";
import Dashboard from "./pages/Dashboard";
import * as Styles from "./App.styles";

function App() {
  return (
    <Styles.App>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cartdetails" element={<CartDetails />} />
        </Routes>
      </Router>
    </Styles.App>
  );
}

export default App;
