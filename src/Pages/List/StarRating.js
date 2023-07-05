import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';


const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
