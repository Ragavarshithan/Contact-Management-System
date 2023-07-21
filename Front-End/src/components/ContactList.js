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
        setContact(response.data);
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
    <div className='container'>
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
            contacts.map(
              contact =>
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.emailId}</td>
                <td>{contact.dob}</td>
                <td>{contact.address}</td>
                <td>
                  <Link to={"/edit/${contact.id}"} className='btn btn-info'>Update</Link>
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