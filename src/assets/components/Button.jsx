import React from 'react';

const Button = ({ cambiar }) => {
  return (
    <div>
      {' '}
      <button onClick={cambiar} className="px-4 py-4 bg-amber-400 mt-5 rounded">
        <i className="fa-solid fa-repeat"></i>
      </button>
    </div>
  );
};

export default Button;
