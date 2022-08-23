import React, { useEffect } from "react";
import calender from "../../Utilities/icon/calendarLogo.png";
import google from "../../Utilities/icon/google.png";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../init.firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const clientId =
  "246190552758-iv4qnbua1chul41b87mfch0gsoeqe8bj.apps.googleusercontent.com";

const AddCalender = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // connect google calendar
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "openid email profile https://www.googleapis.com/auth/calendar",
      });
    }

    gapi.load("client:auth2", start);
  });

  const responseGoogle = (response: any) => {
    const { code } = response;
    axios
      .post("https://secure-chamber-99191.herokuapp.com/api/create-tokens", {
        code,
      })
      .then((response) => {
        const refreshToken = response?.data?.refresh_token;
        if (refreshToken) {
          axios
            .put(`http://localhost:5000/refreshToken/${user?.email}`, {
              refreshToken,
            })
            .then((res) => {
              if (res.status === 200) {
                navigate("/createEvent");
                toast.success("Your Google Calendar Connected");
              }
            });
        }
      })
      .catch((error) => console.log(error.message));
  };
  const responseError = (error: any) => {
    console.log(error);
  };
  return (
    <div>
      <div className="shadow border container mx-auto pb-5 mt-6">
        <div className="py-4 px-8">
          <h1 className="text-xl">Select Calendar</h1>
          <h2 className="text-light text-sm">
            Connect your calendar to let Calendly know when you're available and
            update your calendar as events are scheduled.
          </h2>
        </div>
        <div className="flex px-8 py-3 border-t border-b bg-gray-50">
          <img src={google} className="w-[30px]" alt="" />
          <h2 className="ml-4 font-bold">Google</h2>
        </div>
        <div className="flex justify-between mx-8 items-center py-3">
          <div className="flex items-center ">
            <div className="avatar">
              <div className="w-14 p-3 shadow rounded-full border">
                <img src={calender} alt="" />
              </div>
            </div>
            <div className="ml-3">
              <h2>Google Calendar</h2>
            </div>
          </div>
          <div>
            <h2>Gmail, G Suite</h2>
          </div>
          <div>
            <GoogleLogin
              clientId="246190552758-iv4qnbua1chul41b87mfch0gsoeqe8bj.apps.googleusercontent.com"
              buttonText="Connect"
              onSuccess={responseGoogle}
              onFailure={responseError}
              cookiePolicy={"single_host_origin"}
              responseType="code"
              accessType="offline"
              scope="openid email profile https://www.googleapis.com/auth/calendar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCalender;
