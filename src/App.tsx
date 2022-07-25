import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Shared/Navbar/Navbar";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Types from "./Pages/Types/Types";
import NotFound from "./Shared/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
import LoginHome from "./Pages/LoginHome/LoginHome";
import Availability from "./Pages/Availability/Availability";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/types" element={<Types></Types>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        {/* *********** After login ********* */}
        <Route path="/home" element={<LoginHome></LoginHome>}></Route>
        <Route
          path="/availability"
          element={<Availability></Availability>}
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
