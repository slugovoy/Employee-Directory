import React from "react";
import DataBody from "./DataBody";

function DataTable({ employees, onClick }) {
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr className="bg-info">
            <th scope="col" name="picture">Picture</th>
            <th scope="col" name="first" onClick={onClick}>First Name</th>
            <th scope="col" name="last" onClick={onClick}>
              Last Name
            </th>
            <th scope="col" name="phone" onClick={onClick}>Phone</th>
            <th scope="col" name="email" onClick={onClick}>Email</th>
            <th scope="col" name="dob" onClick={onClick}>DOB</th>
          </tr>
        </thead>
        <DataBody employees={employees} />
      </table>
    </>
  );
}

export default DataTable;
