import React from "react";
import DataBody from "./DataBody";
// Render table's header and body part
function DataTable({ employees, onClick }) {
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr className="bg-info">
            <th scope="col" data-name="picture">Picture</th>
            <th scope="col" className="hover" data-name="name.first" onClick={onClick}>First Name</th>
            <th scope="col" className="hover" data-name="name.last" onClick={onClick}>
              Last Name
            </th>
            <th scope="col" className="hover" data-name="phone" onClick={onClick}>Phone</th>
            <th scope="col" className="hover" data-name="email" onClick={onClick}>Email</th>
            <th scope="col" className="hover" data-name="dob.date" onClick={onClick}>DOB</th>
          </tr>
        </thead>
        <DataBody employees={employees} />
      </table>
    </>
  );
}

export default DataTable;
