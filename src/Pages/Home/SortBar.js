import React from 'react';
import './SortBar.css';
const SortBar = () => {
  return (
    <div className="d-flex justify-content-between border border-2 rounded mb-2">
      <a href="#" className="nav-link">
        Best match
      </a>
      <a href="#" className="nav-link active">
        Top reviewed
      </a>
      <a href="#" className="nav-link">
        Lowest price first
      </a>
      <div className="dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Distance
        </a>
        <div className="dropdown-menu">
          {/* Distance options */}
        </div>
      </div>
      <a href="#" className="nav-link text-danger">
        Hot Deals!
      </a>
    </div>
  );
};

export default SortBar;
