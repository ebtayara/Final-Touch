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
}, []);

console.log(reviews)

if(reviews) {

  return (
  <div>
    <body>
      <div className='title'>
        <h1>Reviews Page</h1>
      </div>
      <div className='reviews'>
        <ul>
          {reviews.map(review => (
            <li key={user.id}>
              {review.text_field}
            </li>
          ))}
        </ul>
        <div>

        </div>
      </div>
    </body>
  </div>
    )
  }
  return null
}

export default Reviews;
