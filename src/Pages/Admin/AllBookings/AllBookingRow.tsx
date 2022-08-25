import React from "react";

const allBookingRow = ({id, event, index}: any) => {
  return (
    <tr key={id}>
      <td className="font-bold">{index + 1}</td>
      <td>{event?.hostEmail}</td>
      <td>{event?.inviteeEmail}</td>
      <td>{event?.eventName}</td>
      <td>{event?.date}</td>
      <td>{event?.eventStartTime}</td>
      <td>{event?.eventEndTime}</td>
    </tr>
  );
};

export default allBookingRow;
