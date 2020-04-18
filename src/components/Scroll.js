import React from 'react';

const Scroll = (props) => {
  // console.log("Scroll -> props", props.children)
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '600px' }}>{props.children}</div>
  );
};

export default Scroll;
