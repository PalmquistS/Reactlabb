import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employess, setEmployess] = useState([
    {
      name: "Yazeen Jasim",
      email: "test@mail.com",
      phone: "070000000",
      skills: "React, Javascript, C++, Python, GCP",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Geralt of Rivia",
      email: "test@mail.com",
      phone: "070000000",
      skills: "Angular, CSS, HTML, Javascript",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Yennefer Of Vengerberg",
      email: "test@mail.com",
      phone: "070000000",
      skills: "Go, Phyton, Nodejs",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
  ]);
  function addEmployee() {
    setEmployess((prevState) => {
      return [
        ...prevState,
        {
          name: "Triss Merigold",
          email: "test@mail.com",
          phone: "070000000",
          skills: "Vue, firebase, git, c#",
          avatar: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }
  return (
    <div>
      <h3>Employee List</h3>
      <button className="button" onClick={addEmployee}>
        Add Employee
      </button>
      {employess.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
