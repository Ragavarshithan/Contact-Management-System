import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";



const ContactList = () => {
    const [contacts,setContact]= useState([])

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/contact/view");
        const sortedData = [...response.data].sort((a, b) => a.id - b.id);
      setContact(sortedData);
      } catch (error) {
        console.log(error);
      }
    };

    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/contact/${id}`);
        fetchData(); // Refetch the data after successful deletion
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      // Fetch data initially
      fetchData();
  
      // Fetch data every 1 seconds (adjust the interval as per your requirements)
      const interval = setInterval(fetchData, 1000);
  
      // Cleanup interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <div className='container'
   
    >
        <h2 className='text-center'>Contact List</h2>
        <Link to = "/addcontact" className="btn btn-primary mb-2">Add Contact</Link>
        <table className="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Address</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            contacts.map(({id,firstName,lastName,phoneNumber,emailId,dob,address})=>
              <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phoneNumber}</td>
                <td>{emailId}</td>
                <td>{dob}</td>
                <td>{address}</td>
                <td>
                  <Link to={'/edit/'+id} className='btn btn-info'style={{ marginRight: '5px' }}>Update</Link>
                  <button onClick={() => handleDelete(id)} className='btn btn-danger'>Delete</button>
                </td>

              </tr>
            )
          }
        </tbody>
        </table>
    </div>
  )
}

export default ContactList