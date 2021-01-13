import React from "react";
import DataBody from "./DataBody";

function DataTable({ employees, onClick }) {
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr className="bg-info">
            <th scope="col">Picture</th>
            <th scope="col">First Name</th>
            <th scope="col" onClick={onClick}>
              Last Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <DataBody employees={employees} />
      </table>
    </>
  );
}

export default DataTable;
