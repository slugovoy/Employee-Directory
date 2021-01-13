import React from "react";
import DataBody from "./DataBody";

function DataTable({ employees }) {
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr className="bg-info">
            <th scope="col">Picture</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
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
