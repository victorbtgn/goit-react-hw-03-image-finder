import React from 'react';

export default ({ title, onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    {title}
  </button>
);
