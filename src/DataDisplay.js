import React from 'react'

const DataDisplay = ({ section1Data, section2Data }) => {
    return (
      <div>
        <h2>Section 1 Data:</h2>
        <pre>{JSON.stringify(section1Data, null, 2)}</pre>
  
        <h2>Section 2 Data:</h2>
        <pre>{JSON.stringify(section2Data, null, 2)}</pre>
      </div>
    );
  };

export default DataDisplay