import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../Shared/LoadingSpinner/Loading";
import "moment-timezone";
import Moment from "react-moment";

const Timezone = () => {
  const [select, setSelect] = useState("");

  const { data: times, isLoading } = useQuery(["times"], () =>
    fetch(
      "https://api.timezonedb.com/v2.1/list-time-zone?key=9C1WFZPON0ZL&format=json"
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Select your Timezone</span>
        </label>
        <select
          className="select select-bordered"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          {times?.zones.map((time: any, index: number) => (
            <option key={index + 1}>
              {time.zoneName} - &nbsp;
              <Moment
                tz={time?.zoneName}
                interval={1000}
                format={"LTS"}
              ></Moment>
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Timezone;
