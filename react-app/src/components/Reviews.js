import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styling/Reviews.css';

const Reviews = () => {

// const user = useSelector(state => state.session.user);
const appointment = useSelector(state => state.appointment.appointment)
const [reviews, setReviews] = useState();

//get user specific reviews
// useEffect(() => {
//   async function getReviews() {
//     const response = await fetch(`/api/reviews/all/${user.id}`);
//     const responseData = await response.json();
//     setReviews(responseData.reviews)
//   }
//   getReviews();
// }, [user.id]);
// console.log(reviews)

//get all reviews
useEffect(() => {
  async function getAllReviews() {
    const response = await fetch(`/api/reviews/all/${appointment?.id}`);
    const responseData = await response.json();
    setReviews(responseData.reviews)
  }
  getAllReviews();
}, [appointment?.id]);

if(reviews) {

  return (
  <div className='reviews_body'>
    <div className='reviews_container'>
      {/* <div className='reviews_title'>
        <h1>Reviews</h1>
      </div> */}
      <div className='reviews'>
        <ul className='reviews_ul'>
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
