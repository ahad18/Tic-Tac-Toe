import React, { useState, useEffect } from 'react';

const AhadAbdul = ['ac', 'cd', 'ef', 'gh', 'ij'];

function Paring() {
  const [text, setText] = useState('');

  useEffect(() => {
    let newText = '';
    AhadAbdul.forEach((val, index) => {
      newText += index + ':' + val + '; ';
    });
    setText(newText);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{text}</h1>
      <h1 className="text-xl font-semibold mb-4">Ride it</h1>
      <audio className="mb-4" controls>
        <source src="https://aac.saavncdn.com/805/4d903cc84643cb2971d9d57b1f146ae8_320.mp4" type="audio/mpeg" />
        
      </audio>
    </div>
  );
}

export default Paring;
