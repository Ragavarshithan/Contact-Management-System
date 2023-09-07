// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const Update = () => {
//   const { id } = useParams(); // Get the contact ID from the URL

//   const [contact, setContact] = useState({
//     id:id,
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     emailId: '',
//     address: '',
//     dob: '',
//   });

//   useEffect(() => {
//     axios.get('http://localhost:8080/contact/view/' + id)
//     .then(res =>{
//       setContact({...contact,firstName: res.data.firstName,lastName: res.data.lastName,phoneNumber: res.data.phoneNumber,emailId: res.data.emailId,address: res.data.address,dob: res.data.dob})
//     })
//     .catch(err => console.log(err))
//   }, []); // Fetch contact details only once on component mount

 

  

  

//   return (
//     <div className='container'>
//       <h2 className='text-center'>Update Contact</h2>
//       <form >
//         <div className='form-group mb-2'>
//           <label className='form-label'>First Name:</label>
//           <input
//             type='text'
//             name='firstName'
//             className='form-control'
//             value={contact.firstName}
            
//           />
//           <label className='form-label'>Last Name:</label>
//           <input
//             type='text'
//             name='lastName'
//             className='form-control'
//             value={contact.lastName}
            
//           />
//           <label className='form-label'>Mobile Number:</label>
//           <input
//             type='text'
//             name='phoneNumber'
//             className='form-control'
//             value={contact.phoneNumber}
            
//           />
//           <label className='form-label'>E-mail:</label>
//           <input
//             type='text'
//             name='emailId'
//             className='form-control'
//             value={contact.emailId}
           
//           />
//           <label className='form-label'>Date Of Birth:</label>
//           <input
//             type='date'
//             name='dob'
//             className='form-control'
//             value={contact.dob}
          
//           />
//           <label className='form-label'>Address:</label>
//           <input
//             type='text'
//             name='address'
//             className='form-control'
//             value={contact.address}
           
//           />
//         </div>
//         <button type='submit' className='btn btn-success'>
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Update;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditContact = ({ contact, onUpdateContact }) => {
//   const [editedContact, setEditedContact] = useState({});

//   useEffect(() => {
//     setEditedContact({ ...contact });
//   }, [contact]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedContact((prevContact) => ({ ...prevContact, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Add validation here if needed before submitting the data

//     try {
//       // Make a PUT request to the backend URL to update the contact
//       const response = await axios.put(`http://localhost:8080/contact/{id}`, editedContact);
//       // Assuming the backend responds with the updated contact
//       const updatedContact = response.data;

//       // Call the callback function to update the contact in the state or perform any other action
//       onUpdateContact(updatedContact);
//     } catch (error) {
//       // Handle error if the request fails
//       console.error('Error updating contact:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Contact</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={editedContact.name || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={editedContact.email || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={editedContact.phoneNumber || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={editedContact.address || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="dob"
//             value={editedContact.dob || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Update Contact</button>
//       </form>
//     </div>
//   );
// };

// export default EditContact;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CONTACT_BASE_REST_API_URL = 'http://localhost:8080/contact';

const UpdateEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get("http://localhost:8080/contact/"+id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailId(response.data.emailId);
        setAddress(response.data.address);
        setDob(response.data.dob);
        setPhoneNumber(response.data.phoneNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    const contact = { firstName, lastName, emailId,address,dob,phoneNumber };
    axios
      .patch(CONTACT_BASE_REST_API_URL + '/' + id, contact)
      .then((response) => {
        navigate('/contact');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Update Contact</h2>
            <div className="card-body">
              <form>
              <div className='form-group mb-2'>
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
               

                
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                

                
                  <label className="form-label">Email Id:</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    required
                  />
                

                 
                  <label className="form-label">Address:</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                

                
                  <label className="form-label">Email Id:</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    required
                  />
               
                 
                  <label className='form-label'>Date Of Birth :</label>
                  <input
                    type='date'
                    name='Dob'
                    className='form-control'
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                  
                </div>
                <div className="col-md-6 d-flex justify-content-md-end align-items-end">
                <button className="btn btn-success" onClick={updateEmployee}>
                  Update
                </button>
                <Link to="/employees" className="btn btn-danger ms-2">
                  Cancel
                </Link>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
