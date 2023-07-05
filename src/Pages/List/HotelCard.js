import React, { useState } from "react";
import StarRating from "./StarRating";
import HotelCardFooter from "./HotelCardFooter";

const HotelCard = ({ hotel }) => {
  const width = 600;
  const height = 400;
  const widthSmall = 100;
  const heightSmall = 100;

  return (
    <>
      {/* <div className="hotel-card">
      <div className="card-header">
        <h2>{hotel.title}</h2>
        <p>Price: {hotel.priceForDisplay}</p>
      </div>
      <div className="card-body">
        <div className="card-photos">
          {hotel.cardPhotos.map((photo) => (
            <img key={photo.sizes.maxHeight} src={photo.sizes.urlTemplate.replace("{width}", width).replace("{height}", height)} alt={photo._typename} />
))}
        </div>
        <div className="card-info">
          <p>Rating: {hotel.bubbleRating.rating}/5</p>
          <p>Review Count: {hotel.bubbleRating.count}</p>
          <p>Provider: {hotel.provider}</p>
        </div>
      </div>
      <div className="card-footer">
        <p>{hotel.accentedLabel}</p>
      </div>
    </div> */}
      <div className="card mb-2 shadow">
        <div className="card-body">
          <a
            href={hotel.provider}
            target="_blank"
            className="text-decoration-none text-dark"
            rel="noopener noreferrer"
            aria-label={hotel.title}
          >
            <div className="row">
              <div className="col-md-4">
                <div className="card-photos">
                  {hotel.cardPhotos.map((photo, index) => (
                    <>
                      {" "}
                      {index == 0 && (
                        <img
                          className="img-fluid"
                          key={photo.sizes.maxHeight}
                          src={photo.sizes.urlTemplate
                            .replace("{width}", width)
                            .replace("{height}", height)}
                          alt={photo._typename}
                        />
                      )}
                    </>
                  ))}
                  {/* ----- */}
                  <div className="row">
                    {hotel.cardPhotos.map((photo,index) => (
                      <>
                        <div className="col-4">
                          {index<3 &&
                          <img
                            className="img-fluid"
                            key={photo.sizes.maxHeight}
                            src={photo.sizes.urlTemplate
                              .replace("{width}", widthSmall)
                              .replace("{height}", heightSmall)}
                            alt={photo._typename}
                          />
                            }
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-5 border-end">
                <h5 className="card-title title">{hotel.title}</h5>
                <small class="text-muted">{hotel.provider}</small>
                <p className="card-text">Price: {hotel.priceForDisplay}</p>
                <button className="btn btn-danger ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4.5 1A1.5 1.5 0 0 1 2 12.5v.8A1.7 1.7 0 0 0 3.7 15h8.6A1.7 1.7 0 0 0 14 13.3v-.8A1.5 1.5 0 0 1 12.5 10h-9zm0-6a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0V5zm4 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0V5zm4 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0V5zm-8.5-4A1.5 1.5 0 0 0 2 2.5v.8A1.7 1.7 0 0 0 3.7 5h8.6A1.7 1.7 0 0 0 14 3.3v-.8A1.5 1.5 0 0 0 12.5 1h-9zm-3 0A2.5 2.5 0 0 0 1 3.5v10A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 12.5 1h-9zm9 1a.5.5 0 0 1 .5.5V3h-1V2.5a.5.5 0 0 1 .5-.5zm-8 0a.5.5 0 0 1 .5.5V3H4V2.5a.5.5 0 0 1 .5-.5zM5 3v1.5a.5.5 0 0 1-1 0V3h1zm6 0v1.5a.5.5 0 0 1-1 0V3h1zM4 4v1.5a.5.5 0 0 1-1 0V4h1zm6 0v1.5a.5.5 0 0 1-1 0V4h1zm-7 1v10A1.5 1.5 0 0 0 2.5 17h9a1.5 1.5 0 0 0 1.5-1.5v-10H3V5h-.5A1.5 1.5 0 0 0 1 6.5zM14 5v10a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 15.5v-10H1V5h13zm1-2V2.5A1.5 1.5 0 0 0 13.5 1h-9A1.5 1.5 0 0 0 3 2.5V3h11zm-3 3v1h-8V6h8zm-8 1v1h8V7h-8zm8 1v1h-8V8h8zm-8 1v1h8v-1h-8zm-6-5H3v10h2V4zm6 0H9v10h2V4zm4 0h-2v10h2V4z" />
                  </svg>
                  Book Now
                </button>
                <div className="col-12 mt-5 ">
                  <HotelCardFooter />
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12">
                    Ratings:
                    <StarRating rating={hotel.bubbleRating.rating} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
