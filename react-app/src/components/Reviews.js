import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styling/Reviews.css';

const Reviews = () => {

const user = useSelector(state => state.session.user);
const [reviews, setReviews] = useState();

useEffect(() => {
  async function getReviews() {
    const response = await fetch(`/api/reviews/all/${user.id}`);
    const responseData = await response.json();
    setReviews(responseData.reviews)
  }
  getReviews();
}, [user.id]);

// console.log(reviews)

if(reviews) {

  return (
  <div className='reviews_body'>
    <div>
      <div className='title'>
        <h1>Reviews Page</h1>
      </div>
      <div className='reviews'>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              {review.text_field}
            </li>
          ))}
        </ul>
        <div>
        </div>
      </div>
    </div>
  </div>
    )
  }
  return null
}

export default Reviews;
