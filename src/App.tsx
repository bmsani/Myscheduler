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
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./init.firebase";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import EventBooking from "./Pages/EventBooking/EventBooking";
import BookingCalender from "./Pages/EventBooking/BookingCalender";
import CalendarEvent from "./Pages/Dashboard/EventTypes/CreateCalendarEvent/CalendarEvent";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={user ? <Dashboard></Dashboard> : <Home></Home>}
        ></Route>
        <Route path="/types" element={<Types></Types>}></Route>
        <Route path="/story" element={<Story></Story>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/blogDetails/:id"
          element={<BlogDetails></BlogDetails>}
        ></Route>

        <Route
          path="/eventBooking"
          element={<EventBooking></EventBooking>}
        ></Route>
        <Route
          path="/bookingCalender"
          element={<BookingCalender></BookingCalender>}
        ></Route>

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
          <Route index element={<Event></Event>}></Route>
          <Route path="workflow" element={<Workflow />}></Route>
          <Route path="eventTypes" element={<EventTypes />}></Route>
          <Route path="scheduling" element={<Scheduling />}></Route>
          <Route path="routingForms" element={<RoutingForms />}></Route>
        </Route>
        <Route
          path="calendarEvent"
          element={
            <RequiredAuth>
              <CalendarEvent></CalendarEvent>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/availability"
          element={
            <RequiredAuth>
              {/* <Demo /> */}
              <Availability />
            </RequiredAuth>
          }
        ></Route>
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
        <Route
          path="/calenderConnection"
          element={
            <RequiredAuth>
              <CalenderConnection />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/shareLink"
          element={
            <RequiredAuth>
              <ShareLink />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/addCalender"
          element={
            <RequiredAuth>
              <AddCalender />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="profile"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
