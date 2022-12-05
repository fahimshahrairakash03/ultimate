import React from "react";

const AttendenceTable = ({ attend }) => {
  const { attendance, name } = attend;
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <tbody>
          <tr>
            <td></td>
            <td>{attend.name}</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendenceTable;
