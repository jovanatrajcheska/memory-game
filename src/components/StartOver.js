import React from 'react';

function StartOver({ onRestart }) {
  const handleStartOver = () => {
    onRestart(); 
  };

  return (
    <div className="button-container">
      <button className="start-over-button" onClick={handleStartOver}>
        Start Over
      </button>
    </div>
  );
}

export default StartOver;
