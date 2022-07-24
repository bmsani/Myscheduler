import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Shared/Navbar/Navbar";
import Register from "./Pages/Register/Register";
import Types from "./Pages/Types/Types";
import NotFound from "./Shared/NotFound/NotFound";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/types" element={<Types></Types>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
