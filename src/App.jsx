import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clotches from "./pages/Clotches";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import checkout from "./Content/Checkout";
import NavbarUrban from "./components/NavbarUrban";
import FooterComponents from "./components/FooterComponents";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavbarUrban />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Clotches" Component={Clotches} />
        <Route path="/Pants" Component={Pants} />
        <Route path="/Shoes" Component={Shoes} />
        <Route path="/Checkout/:id" Component={checkout} />
      </Routes>
      <FooterComponents />
    </div>
  );
}

export default App;
