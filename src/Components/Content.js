import React from 'react';
import { Resizable } from 're-resizable';
import Home from './Home';

// Content component for displaying resizable Home component
const Content = () => {
  // Render the component
  return (
    // Container with flex layout for centering
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Resizable component for flexibility */}
      <Resizable
        defaultSize={{ width: '90%', height: 200 }}
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
        style={{ background: '#f0f0f0', padding: '10px', boxSizing: 'border-box', overflow: 'hidden' }}
      >
        {/* Render the Home component */}
        <Home/>
      </Resizable>
    </div>
  );
}

// Export the Content component
export default Content;
