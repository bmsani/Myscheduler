import { Route, Routes, useLocation } from "react-router-dom";
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
import CreateEventType from "./Pages/Dashboard/EventTypes/CreateEventType/CreateEventType";
import CreateIndividualEvent from "./Pages/Dashboard/EventTypes/CreateIndividualEvent/CreateIndividualEvent";
import EventDetailsAdd from "./Pages/Dashboard/EventTypes/EventDetailsAdd/EventDetailsAdd";
import Admin from "./Pages/Admin/Admin";
import Users from "./Pages/Admin/Users/Users";
import UserDetails from "./Pages/Admin/UserDetails/UserDetails";
import Payment from "./Pages/Payment/Payment";
import CreateGroupEvent from "./Pages/Dashboard/EventTypes/CreacteGroupEvent/CreateGroupEvent";
import PricingCard from "./Pages/Payment/PricingCard/PricingCard";
import UpcomingEvent from "./Pages/Dashboard/Scheduling/UpcomingEvent/UpcomingEvent";
import PendingEvent from "./Pages/Dashboard/Scheduling/PendingEvent/PendingEvent";
import PastEvent from "./Pages/Dashboard/Scheduling/PastEvent/PastEvent";
import EventSuccessMessage from "./Pages/EventBooking/EventSuccessMessage";

function App() {
  const [user] = useAuthState(auth);
  const location = useLocation().pathname.split("/")[1];
  console.log();

  return (
    <div>
      {location === "bookingCalender" || location === "eventSuccessMessage" ? (
        <></>
      ) : (
        <Navbar />
      )}

      <Routes>
        <Route
          path="/"
          element={user ? <Dashboard></Dashboard> : <Home></Home>}
        ></Route>
        <Route path="/types" element={<Types></Types>}></Route>
        <Route path="/story" element={<Story></Story>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/blogDetails/:id" element={<BlogDetails />}></Route>
        <Route
          path="/createEvent"
          element={<CreateEventType></CreateEventType>}
        ></Route>
        <Route
          path="/createIndividualEvent"
          element={<CreateIndividualEvent></CreateIndividualEvent>}
        ></Route>
        <Route
          path="/createGroupEvent"
          element={<CreateGroupEvent></CreateGroupEvent>}
        ></Route>

        <Route
          path="/eventDetailsAdd"
          element={<EventDetailsAdd></EventDetailsAdd>}
        ></Route>
        <Route
          path="/eventBooking"
          element={<EventBooking></EventBooking>}
        ></Route>

        <Route
          path="/bookingCalender/:id"
          element={<BookingCalender />}
        ></Route>
        <Route
          path="/eventSuccessMessage"
          element={<EventSuccessMessage />}
        ></Route>

        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        {/* ********* After login ******* */}
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
          <Route path="scheduling" element={<Scheduling />}>
            <Route path="upcomingEvent" element={<UpcomingEvent />} />
            <Route path="pendingEvent" element={<PendingEvent />} />
            <Route path="pastEvent" element={<PastEvent />} />
          </Route>
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
          path="/admin"
          element={
            <RequiredAuth>
              <Admin />
            </RequiredAuth>
          }
        >
          <Route index element={<Users></Users>}></Route>
          <Route path="userDetails" element={<UserDetails />}></Route>
        </Route>
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
        <Route path="/priceCart" element={<PricingCard />}></Route>
        <Route
          path="payment"
          element={
            <RequiredAuth>
              <Payment />
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
