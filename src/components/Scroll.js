import React from 'react';

const Scroll = (props) => {
<<<<<<< HEAD
  console.log('Scroll');
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
=======
  // console.log("Scroll -> props", props.children)
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '600px' }}>{props.children}</div>
  );
};

export default Scroll;
>>>>>>> 18e510b2fbcbff1bea9c066f7ad9f2ff9cf41815
