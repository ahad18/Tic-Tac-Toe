import React from 'react';

let text = '';
const ahadAbdul = ['ac', 'cd', 'ef', 'gh', 'ij'];

const cid = (val, index) => {
  text += index + ':' + val + '; ';
};

ahadAbdul.forEach(cid);

function Paring() {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default Paring;
