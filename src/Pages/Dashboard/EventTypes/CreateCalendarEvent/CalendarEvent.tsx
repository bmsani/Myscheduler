import React, { useRef } from "react";

const CalendarEvent = () => {
  const getSummary = useRef<HTMLInputElement | null>(null);
  const getDescription = useRef<HTMLTextAreaElement | null>(null);
  const getEmail = useRef<HTMLInputElement | null>(null);
  const getStartTime = useRef<HTMLInputElement | null>(null);
  const getEndTime = useRef<HTMLInputElement | null>(null);
  const handleProfile = (e: any) => {
    e.preventDefault();
    const summary = getSummary?.current?.value;
    const description = getDescription?.current?.value;
    const email = getEmail?.current?.value;
    const startTime = getStartTime?.current?.value;
    const endTime = getEndTime?.current?.value;
    console.log(summary, description, email, startTime, endTime);
  };
  return (
    <div className="pt-8 pb-16">
        <h1 className="text-3xl font-semibold text-center text-secondary py-4">Create Your Event</h1>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleProfile}
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
    </div>
  );
};

export default CalendarEvent;
