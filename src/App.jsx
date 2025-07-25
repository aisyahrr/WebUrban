import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Clotches from "./pages/Clotches";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import checkout from "./Content/DetailProduk";
import Masuk from "./pages/Masuk";
import NavbarUrban from "./components/NavbarUrban";
import FooterComponents from "./components/FooterComponents";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/Masuk"; // layout disembunyikan di /Masuk

  return (
    <div className="overflow-x-hidden">
      {!hideLayout && <NavbarUrban />}
      
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Clotches" Component={Clotches} />
        <Route path="/Pants" Component={Pants} />
        <Route path="/Shoes" Component={Shoes} />
        <Route path="/Checkout/:id" Component={checkout} />
        <Route path="/Masuk" Component={Masuk} />
      </Routes>
      
      {!hideLayout && <FooterComponents />}
    </div>
  );
}

export default App;
