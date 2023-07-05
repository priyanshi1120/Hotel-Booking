import React from 'react';
import "./HotelCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler, faBed, faUtensils, faStar } from '@fortawesome/free-solid-svg-icons';

const HotelCardFooter = () => {
    return(
    <div className="container fontSize mt-md-3">
    <div className="d-flex align-items-center  me-3 border-top mt-2">
      <h6 className="text-muted">Highlights</h6>
      <ul className="list-unstyled d-flex text-center px-1">
        {/* <li className="me-3 border-end">
          <FontAwesomeIcon icon={faRuler} />
        </li> */}
        <li className="me-3 border-end px-1">
          <FontAwesomeIcon icon={faBed} />
     
        </li>
        <li className="me-3 border-end px-1">
          <FontAwesomeIcon icon={faBed} />
         
        </li>
        <li className="me-3  px-1">
          <FontAwesomeIcon icon={faUtensils} />
        </li>
      </ul>
    </div>
  </div>
);
};

export default HotelCardFooter;
