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
import Event from "./Pages/Event/Event";
import Story from "./Pages/Story/Story";
import RequiredAuth from "./Shared/RequiredAuth/RequiredAuth";
import About from "./Pages/About/About";
import CalenderConnection from "./Pages/CalenderConnection/CalenderConnection";
import AddCalender from "./Pages/AddCalender/AddCalender";
import ShareLink from "./Pages/ShareLink/ShareLink";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/types" element={<Types></Types>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/story" element={<Story></Story>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

        {/* *********** After login ********* */}
        <Route
          path="home"
          element={
            <RequiredAuth>
              <LoginHome>
                <Route index element={<Event></Event>}></Route>
              </LoginHome>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/availability"
          element={<Availability></Availability>}
        ></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="/calenderConnection" element={<CalenderConnection></CalenderConnection>}
        >

        </Route>
        <Route path="/shareLink" element={<ShareLink></ShareLink>}></Route>
        <Route path="/addCalender" element={<AddCalender></AddCalender>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
