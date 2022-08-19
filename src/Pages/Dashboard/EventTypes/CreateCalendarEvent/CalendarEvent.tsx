import axios from "axios";
import { gapi } from "gapi-script";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "246190552758-iv4qnbua1chul41b87mfch0gsoeqe8bj.apps.googleusercontent.com";

const CalendarEvent = () => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

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
    console.log(response);
    const { code } = response;
    axios
      .post("https://secure-chamber-99191.herokuapp.com/api/create-tokens", {
        code,
      })
      .then((response) => {
        console.log(response?.data);
        const refreshToken = response?.data?.refresh_token;
        if (refreshToken) {
          localStorage.setItem("refreshToken", refreshToken);
        }
        setSignedIn(true);
      })
      .catch((error) => console.log(error.message));
  };
  const responseError = (error: any) => {
    console.log(error);
  };

  const getSummary = useRef<HTMLInputElement | null>(null);
  const getDescription = useRef<HTMLTextAreaElement | null>(null);
  const getEmail = useRef<HTMLInputElement | null>(null);
  const getLocation = useRef<HTMLInputElement | null>(null);
  const getStartTime = useRef<HTMLInputElement | null>(null);
  const getEndTime = useRef<HTMLInputElement | null>(null);

  const handleCreateEvent = async (e: any) => {
    e.preventDefault();

    const summary = getSummary?.current?.value;
    const description = getDescription?.current?.value;
    const location = getLocation?.current?.value;
    const email = getEmail?.current?.value;
    const startDateTime = moment(getStartTime?.current?.value).format();
    const endDateTime = moment(getEndTime?.current?.value).format();

    const eventData = {
      summary,
      description,
      location,
      email,
      startDateTime,
      endDateTime,
    };
    const getRefreshToken = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
    };
    axios
      .post(
        "https://secure-chamber-99191.herokuapp.com/api/create-event",
        { eventData },
        getRefreshToken
      )
      .then((response) => {
        console.log(response);
        setSignedIn(true);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="pt-8 pb-16">
      <h1 className="text-3xl font-semibold text-center text-secondary py-4">
        Create Your Event
      </h1>
      {!signedIn ? (
        <div className="text-center mt-16">
          <GoogleLogin
            clientId="246190552758-iv4qnbua1chul41b87mfch0gsoeqe8bj.apps.googleusercontent.com"
            buttonText="Connect your calendar"
            onSuccess={responseGoogle}
            onFailure={responseError}
            cookiePolicy={"single_host_origin"}
            responseType="code"
            accessType="offline"
            scope="openid email profile https://www.googleapis.com/auth/calendar"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleCreateEvent}
            className="mx-2 w-full md:w-[500px] md:mx-0"
          >
            <div className="mt-4">
              <label className="text-primary font-medium" htmlFor="name">
                Summary
              </label>

              <input
                className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
                type="text"
                required
                ref={getSummary}
              />
            </div>

            <div className="mt-4">
              <label className="text-primary font-medium" htmlFor="message">
                Description
              </label>

              <textarea
                className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
                name="message"
                id="message"
                required
                ref={getDescription}
                cols={10}
                rows={3}
              ></textarea>
            </div>

            <div className="mt-4">
              <label className="text-primary font-medium" htmlFor="mobile">
                Location
              </label>
              <input
                className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
                type="text"
                required
                ref={getLocation}
              />
            </div>

            <div className="mt-4">
              <label className="text-primary font-medium" htmlFor="mobile">
                Invitee Email
              </label>
              <input
                className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
                type="email"
                required
                ref={getEmail}
              />
            </div>
            <div className="mt-4">
              <label className="text-primary font-medium" htmlFor="mobile">
                Start & End Date Time
              </label>
              <div className="flex gap-2">
                <input
                  className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-1/2"
                  type="datetime-local"
                  required
                  ref={getStartTime}
                />
                <input
                  className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-1/2"
                  type="datetime-local"
                  required
                  ref={getEndTime}
                />
              </div>
            </div>
            <input
              className="mt-6 bg-primary py-2 px-4 rounded-lg text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer"
              type="submit"
              value="Create Event"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default CalendarEvent;
