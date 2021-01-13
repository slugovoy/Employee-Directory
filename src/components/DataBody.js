import React from "react";

function DataBody({ employees }) {
  return (
    <tbody>
      {employees.map(({ login, name, picture, phone, email, dob }) => (
        <tr key={login.uuid}>
          <td>
            <img src={picture.medium} alt={`profile of ${name.first} ${name.last}`}/>
          </td>
          <td>{name.first}</td>
          <td>{name.last}</td>
          <td>{phone}</td>
          <th>{email}</th>
          <th>{dob.date.slice(0,10)}</th>
        </tr>
      ))}
    </tbody>
  );
}

export default DataBody;
