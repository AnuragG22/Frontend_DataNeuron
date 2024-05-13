import React from 'react';
import { Resizable } from 're-resizable';
import UserForm from './UserForm';
import '../../App.css';

// HeaderRight component for displaying user form
const HeaderRight = () => {
  // Render the component
  return (
    // Resizable component for flexibility
    <Resizable
      defaultSize={{ width: '60%' }}
      minWidth={100}
      minHeight={100}
      enable={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      style={{ background: '#f0f0f0', padding: '10px', margin: '10px', boxSizing: 'border-box', overflow: 'hidden' }}
    >
      {/* Render the UserForm component */}
      <UserForm/>
    </Resizable>
  );
}

// Export the HeaderRight component
export default HeaderRight;
