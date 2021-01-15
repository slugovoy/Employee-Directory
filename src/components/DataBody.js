import React from "react";
// Function that renders body of table with employee's rows
function DataBody({ employees }) {
  return (
    <tbody className="text-center">
      {employees.map(({ login, name, picture, phone, email, dob }) => (
        <tr key={login.uuid}>
          <td className="imageField d-flex justify-content-center">
            <img src={picture.medium} alt={`profile of ${name.first} ${name.last}`}/>
          </td>
          <td className="name bg-danger text-white">{name.first}</td>
          <td className="name bg-danger text-white">{name.last}</td>
          <td>{phone}</td>
          <td className="name bg-success text-white">{email}</td>
          <td>{dob.date.slice(0,10)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default DataBody;
