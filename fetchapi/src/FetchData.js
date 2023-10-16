import React,{useState,useEffect} from "react";
import "./App.css"

function App() {
  const [users,setUsers] = useState([]);

  useEffect(()=>
  {
    fetch("https://dummyjson.com/users")
    .then((response)=> response.json())
    .then((data)=> setUsers(data.users));
  }, []);

  return (
    <div>
      <h1>Dummy data</h1>
      <table cellSpacing={10}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
          <tr>
            <th colSpan={10}>_________________________________________________________________________________________________________________________________________________________________________________________________________________</th>
          </tr>
        </thead>
        
        <tbody>
          {users.map((abc, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>
              <img src={abc.image} alt={abc.firstName} width={50} />
              </td>
              <td>{abc.firstName}</td>
              <td>{abc.lastName}</td>
              <td>{abc.gender}</td>
              <td>{abc.email}</td>
              <td>{abc.username}</td>
              <td>{abc.domain}</td>
              <td>{abc.ip}</td>
              <td>{abc.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;