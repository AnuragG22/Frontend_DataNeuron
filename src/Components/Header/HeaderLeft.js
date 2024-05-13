import React, { useEffect, useState } from 'react';
import { Resizable } from 're-resizable';
import axios from 'axios';
import { BASE_URL } from '../../helper';

// HeaderLeft component for displaying count details
const HeaderLeft = () => {
  // State to store count details
  const [allCount, setAllCount] = useState([]);

  // Fetch count details from the server on component mount
  useEffect(() => {
    const fetchCountDetails = async () => {
      try {
        // Fetch count details from the server
        const response = await axios.get(`${BASE_URL}/counts`);

        // Check if response and data are valid
        if (!response || !response.data || !response.data.allCount) {
          throw new Error("Invalid response from the server");
        }

        // Set count details in state
        setAllCount(response.data.allCount);
      } catch (error) {
        // Handle errors fetching count details
        console.error("Error fetching Count details:", error.message);
      }
    };

    // Invoke fetchCountDetails function
    fetchCountDetails();
  }, []);

  // Render the component
  return (
    // Resizable component for flexibility
    <Resizable
      defaultSize={{ width: '40%' }}
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
      {/* Container for count details */}
      <div style={{ width: '100%', height: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Display Add Count and Update Count */}
        <div>
          <h3>Add Count :{allCount[0]?.AddCount}</h3>
          <h3>Update Count :{allCount[0]?.UpdateCount}</h3>
        </div>
      </div>
    </Resizable>
  );
}

// Export the HeaderLeft component
export default HeaderLeft;
