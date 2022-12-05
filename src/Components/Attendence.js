import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../assets/logo.png";
import "./Attendance.css";

const Attendence = () => {
  const [attendence, setAttendence] = useState(null);

  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      headers: {
        authorization: `bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAttendence(data);
      });
  }, []);
  let attendences;
  if (attendence !== null) {
    attendences = Object.values(attendence);
    console.log(attendences);
  }

  return (
    <div className="attendence-page">
      <img className="attend-logo" src={logo} alt="" />

      <div className="attendence mt-40 mx-auto">
        <h1 className="attendance-text text-center py-4">
          Attendence Information
        </h1>
      </div>

      <div>
        <div className="overflow-x-auto mt-20">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Employee Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendence !== null &&
                attendences.map((attend) => (
                  <tr key={attend.id}>
                    {Object.keys(attend.attendance)}

                    <td>{attend.name}</td>
                    <td>Present</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
