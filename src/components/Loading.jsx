import React from 'react';

const Loading = () => {
  return (
    <div className="text-center" style={{ marginTop: '7rem', marginBottom: '8rem'}}>
      <p>Loading...</p>
      <div className="spinner-border" style={{ width: '3rem', height: '3rem'}} text-secondary="true" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;