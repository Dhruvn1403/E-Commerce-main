import React from "react";
import profilePng from "../../images/download.png";
import ReactStars from 'react-rating-stars-component'

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    value: review.rating,
    readOnly: true,
    precision: 0.5,
    isHalf: true
  };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;