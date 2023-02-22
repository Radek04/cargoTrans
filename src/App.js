import "./App.css";
import Main from "./Components/Main/Main";
import Order from "./Components/weOrder/order/Order";
import LookFor from "./Components/LookFor/LookFor";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weOrder" element={<Order />} />
        <Route path="/lookFor" element={<LookFor />} />
      </Routes>
    </Routers>
  );
}

export default App;
