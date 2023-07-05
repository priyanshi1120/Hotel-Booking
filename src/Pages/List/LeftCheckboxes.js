import React from "react";
import Checkboxes from "./Checkboxes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';


const LeftCheckboxes = () => {
  const checkboxTextsPopularfilter = [
    "Free Wi-Fi",
    "Swimming Pool",
    "Gym/Fitness Center",
    "Spa/Wellness Center",
    "Restaurant",
  ];
  const checkboxTextsPropertyType = [
    "Entire house ",
    "Entire apartment ",
    "Hotel (16)",
    "Hostel (1)",
    "Entire bungalow ",
    "Entire villa (1)",
  ];
  const checkboxItems = [
    { rating: 5, count: 25 },
    { rating: 4, count: 11 },
    { rating: 3, count: 10 },
    { rating: 2, count: 6 },
    { rating: 1, count: 2 },
  ];

  return (
    <div className="container">
      <div className="row border-2 border-bottom p-2">
        <h6 className="text-muted fw-bold">Popular Filters</h6>
        <Checkboxes checkboxTexts={checkboxTextsPopularfilter} />
      </div>
      <div className="row border-2 border-bottom p-2">
        <h6 className="text-muted fw-bold">Property Types</h6>
        <Checkboxes checkboxTexts={checkboxTextsPropertyType} />
      </div>
      <div className="row border-2 border-bottom p-2">
      <h6 className="text-muted fw-bold">Ratings</h6>
      <ul className="list-group list-group-flush">
        {checkboxItems.map((item, index) => (
          <li key={index} className={`list-group-item StarRating-${item.rating}`}>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id={`checkbox-${index}`} />
              <label className="form-check-label" htmlFor={`checkbox-${index}`}>
              {Array(item.rating)
        .fill()
        .map((_, index) => (
         <FontAwesomeIcon icon={faStar} key={index} />
        ))}
             
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
      </div>
    
  );
};

export default LeftCheckboxes;
