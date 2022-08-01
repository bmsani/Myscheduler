import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Types from "./Pages/Types/Types";
import NotFound from "./Shared/NotFound/NotFound";
import Story from "./Pages/Story/Story";
import RequiredAuth from "./Shared/RequiredAuth/RequiredAuth";
import About from "./Pages/About/About";
import Profile from "./Pages/AccountSettings/Profile/Profile";
import AccountSettings from "./Pages/AccountSettings/AccountSettings";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Availability from "./Pages/Availability/Availability";
import Workflow from "./Pages/Dashboard/Workflow/Workflow";
import EventTypes from "./Pages/Dashboard/EventTypes/Event";
import Scheduling from "./Pages/Dashboard/Scheduling/Scheduling";
import RoutingForms from "./Pages/Dashboard/RoutingForms/RoutingForms";
import CalenderConnection from "./Pages/CalenderConnection/CalenderConnection";
import AddCalender from "./Pages/AddCalender/AddCalender";
import ShareLink from "./Pages/ShareLink/ShareLink";
import Navbar from "./Shared/Navbar/Navbar";
import MyLink from "./Pages/AccountSettings/MyLink/MyLink";
import Event from "./Pages/Dashboard/EventTypes/Event";
import Branding from "./Pages/AccountSettings/Branding/Branding";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/types" element={<Types></Types>}></Route>
        <Route path="/story" element={<Story></Story>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        {/* *********** After login ********* */}
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route index element={<Event />}></Route>
          <Route path="workflow" element={<Workflow />}></Route>
          <Route path="eventTypes" element={<EventTypes />}></Route>
          <Route path="scheduling" element={<Scheduling />}></Route>
          <Route path="routingForms" element={<RoutingForms />}></Route>
        </Route>
        <Route path="/availability" element={<Availability />}></Route>
        <Route
          path="/accountSettings"
          element={
            <RequiredAuth>
              <AccountSettings />
            </RequiredAuth>
          }
        >
          <Route path="profile" element={<Profile />}></Route>
          <Route path="branding" element={<Branding />}></Route>
          <Route path="myLink" element={<MyLink />}></Route>
        </Route>
        <Route path="/shareLink" element={<ShareLink></ShareLink>}></Route>
        <Route
          path="/addCalender"
          element={<AddCalender></AddCalender>}
        ></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route
          path="/calenderConnection"
          element={<CalenderConnection></CalenderConnection>}
        ></Route>
        <Route
          path="/addCalender"
          element={<AddCalender></AddCalender>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
