import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="card-header">
        <h2>{hotel.title}</h2>
        <p>Price: {hotel.priceForDisplay}</p>
      </div>
      <div className="card-body">
        <div className="card-photos">
          {hotel.cardPhotos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.caption} />
          ))}
        </div>
        <div className="card-info">
          <p>Rating: {hotel.bubbleRating.rating}/5</p>
          <p>Review Count: {hotel.bubbleRating.count}</p>
          <p>Provider: {hotel.provider}</p>
        </div>
      </div>
      <div className="card-footer">
        <p>{hotel.priceDetails}</p>
      </div>
    </div>
  );
};

export default HotelCard;
