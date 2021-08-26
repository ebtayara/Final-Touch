import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews, editReview, removeReview } from '../store/reviews';
import './styling/Reviews.css';

const Reviews = () => {

const user = useSelector(state => state.session.user);
// const appointment = useSelector(state => state.appointment.appointment);
// const reviews = useSelector(state => state.review.reviews);
const reviews = useSelector(state => Object.values(state.review));
// console.log(review)
// const [reviews, setReviews] = useState();
const dispatch = useDispatch();

// //get user specific reviews - this works
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
  dispatch(getReviews())
  // console.log(reviews)
}
, [dispatch]);

// //get all reviews?
// useEffect(() => {
//   async function getAllReviews() {
//     const response = await fetch(`/api/reviews/all/${appointment?.id}`);
//     const responseData = await response.json();
//     setReviews(responseData.reviews)
//   }
//   getAllReviews();
// }, [appointment?.id]);

// if(reviews) {

  return (
  <div className='reviews_body'>
    <div className='reviews_container'>
      {/* <div className='reviews_title'>
        <h1>Reviews</h1>
      </div> */}
      <div className='reviews'>
        <ul className='reviews_ul'>
          {reviews && reviews.map(review => (
            <div key={review.id}>
            <li>
              {review.text_field}
            </li>
            {user && user.id === review.user_id &&
            <div>
              <div className='edit_review_container'>
              <button type='submit' onClick={async() => {
                await dispatch(editReview(review.id))
              }} className='edit_review'>Edit</button>
              </div>
              <div className='delete_review_container'>
              <button type='submit' onClick={async() => {
                await dispatch(removeReview(review.id))
                window.location.reload()
              }} className='delete_review'>Delete</button>
              </div>
            </div>
            }
        </div>
          ))}
        </ul>
        <div>
        </div>
      </div>
    </div>
  </div>
    )
  }
  // return null
// }

export default Reviews;
