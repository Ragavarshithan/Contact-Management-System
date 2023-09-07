
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// export const AddContact = () => {
//   const navigate = useNavigate(); 

// const saveContact = e => {
//   // Prevent the default submit and page reload
//   e.preventDefault()

//   // Handle validations
//   axios
//     .post('http://localhost:8080/contact/add',{ firstName, lastName, emailId, address, dob, phoneNumber })
//     .then(response => {
//       console.log(response)
//       // Handle response
//       navigate(`/contact/view/${response.data.id}`);
//     })
// }
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [address, setAddress] = useState('');
//   const [dob, setDob] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

 

//   return (
//     <div>
//       <br />
//       <br />
//       <div className='container'>
//         <div className='row'>
//           <div className='card col-md-6 offset-md-3 offset-md-3'>
//             <h2 className='text-center'>Add Contact</h2>
//             <div className='card-body'>
//               <form onSubmit={saveContact} >
//                 <div className='form-group mb-2'>
//                   <label className='form-label'>First Name :</label>
//                   <input
//                     type='text'
//                     placeholder='FirstName'
//                     name='firstName'
//                     className='form-control'
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                   <label className='form-label'>Last Name :</label>
//                   <input
//                     type='text'
//                     placeholder='LastName'
//                     name='lastName'
//                     className='form-control'
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                   <label className='form-label'>Mobile :</label>
//                   <input
//                     type='text'
//                     placeholder='Mobile Number'
//                     name='mobile'
//                     className='form-control'
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                   />
//                   <label className='form-label'>E-mail :</label>
//                   <input
//                     type='text'
//                     placeholder='E-mail'
//                     name='email'
//                     className='form-control'
//                     value={emailId}
//                     onChange={(e) => setEmailId(e.target.value)}
//                   />
//                   <label className='form-label'>Date Of Birth :</label>
//                   <input
//                     type='date'
//                     name='Dob'
//                     className='form-control'
//                     value={dob}
//                     onChange={(e) => setDob(e.target.value)}
//                   />
//                   <label className='form-label'>Address :</label>
//                   <input
//                     type='text'
//                     placeholder='Address'
//                     name='address'
//                     className='form-control'
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                 </div>
//                 <div className="col-md-6 d-flex justify-content-md-end align-items-end">
//           {/* "Cancel" button */}
//           <Link to="/contact/view/" className='btn btn-success'>Save</Link>
//           {/* Save button */}
//           <Link to="/contact/view/" className='btn btn-danger ms-2'>Cancel</Link>
//         </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const AddContact = () => {
  const navigate = useNavigate();

  const saveContact = (e) => {
    e.preventDefault();

    // Handle validations
    axios
      .post('http://localhost:8080/contact/add', {
        firstName,
        lastName,
        emailId,
        address,
        dob,
        phoneNumber,
      })
      .then((response) => {
        console.log(response);
        // Handle response
        navigate(`/contact/view/${response.data.id}`);
      });
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div>
      <br />
      <br />
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Contact</h2>
            <div className='card-body'>
              <form onSubmit={saveContact}>
                <div className='form-group mb-2'>
                  <label className='form-label'>First Name :</label>
                  <input
                    type='text'
                    placeholder='FirstName'
                    name='firstName'
                    className='form-control'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <label className='form-label'>Last Name :</label>
                  <input
                    type='text'
                    placeholder='LastName'
                    name='lastName'
                    className='form-control'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <label className='form-label'>Mobile :</label>
                  <input
                    type='text'
                    placeholder='Mobile Number'
                    name='mobile'
                    className='form-control'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <label className='form-label'>E-mail :</label>
                  <input
                    type='text'
                    placeholder='E-mail'
                    name='email'
                    className='form-control'
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
                  <label className='form-label'>Address :</label>
                  <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    className='form-control'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 d-flex justify-content-md-end align-items-end">
                  {/* "Save" button */}
                  <button type="submit" className='btn btn-success'>Save</button>
                  {/* "Cancel" button */}
                  <Link to="/contact/view/" className='btn btn-danger ms-2'>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



