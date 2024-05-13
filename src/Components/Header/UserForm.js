import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../helper';

// UserForm component for adding or updating user data
const UserForm = ({ close = null, rowData = null }) => {
  // State variable for form data
  const [formData, setFormData] = useState({
    Fname: rowData?.Fname || '',
    Lname: rowData?.Lname || '',
    Email: rowData?.Email || '',
    Password: rowData?.Password || ''
  });

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // If rowData exists, update user data
      if (rowData) {
        const response = await axios.post(`${BASE_URL}/update`, formData);
        if (response.status === 200) {
          console.log('User Updated successfully');
          close(false);
          setFormData({ Fname: '', Lname: '', Email: '', Password: '' });
        }
      }
      // If rowData doesn't exist, add new user
      else {
        const response = await axios.post(`${BASE_URL}/add`, formData);
        if (response.status === 200) {
          console.log('User added successfully');
          setFormData({ Fname: '', Lname: '', Email: '', Password: '' });
        }
      }
      // Reload page after submission
      window.location.reload();
    } catch (error) {
      // Handle errors
      console.error('Error adding/updating user:', error.message);
    }
  };

  // Render the component
  return (
    // Container for user form
    <div className={rowData ? 'container w-100' : 'container'}>
      <h1>{close ? 'Update' : 'Add'}</h1>
      <hr />
      <form>
        {/* Input fields for user data */}
        <div className="input-container">
          <label htmlFor="Fname">First Name</label>
          <input type="text" placeholder="First Name" id="Fname" value={formData.Fname} onChange={handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="Lname">Last Name</label>
          <input type="text" placeholder="Last Name" id="Lname" value={formData.Lname} onChange={handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="Email">Email</label>
          <input type="text" placeholder="Email" id="Email" value={formData.Email} onChange={handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Password" id="Password" value={formData.Password} onChange={handleChange} />
        </div>
        {/* Button for form submission */}
        <button onClick={handleSubmit} className={close ? 'w-50' : ''}>{close ? 'Update' : 'Add'}</button>
        {/* Render cancel button if in update mode */}
        {close && (
          <button className='w-50' style={{ marginTop: '5px' }} onClick={() => close(false)}>Cancel</button>
        )}
      </form>
    </div>
  );
};

// Export the UserForm component
export default UserForm;
