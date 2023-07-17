import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Servercomponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/Server");
      setUsers(response.data);
    } catch (error) {
      console.error('Error occurred while loading users:', error);
    }
  };

  const generatePDF = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/pdf", {
        responseType: 'blob', // Set the response type to 'blob'
      });

      // Create a download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'users.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error occurred while generating or downloading the PDF:', error);
    }
  };

  return (
    <div>
      <h1 className='text-center'>User List</h1>
      <button onClick={generatePDF}>Download Server List</button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>Server Id</td>
            <td>Client</td>
            <td>Location</td>
            <td>Ip Address</td>
            <td>Status</td>
            <td>App</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.serverid}</td>
              <td>{user.client}</td>
              <td>{user.location}</td>
              <td>{user.ipAddress}</td>
              <td>{user.status}</td>
              <td>{user.app}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Servercomponent;
