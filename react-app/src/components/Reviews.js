import React, { useEffect, useState } from 'react';
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
const [text_field, setBody] = useState("");
const [showForm, setShowForm] = useState(false);
const [formId, ] = useState(null);
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

const updateReview = async (review_id, text_field, e) => {
  e.preventDefault();
  await dispatch(editReview(text_field, review_id));
  setBody("");
  setShowForm(false);
};

const openForm = () => {
  setShowForm(true);
};

// if(reviews) {

  return (
  <div className='reviews_body'>
    <div className='reviews_container'>
      {/* <div className='reviews_title'>
        <h1>Reviews</h1>
      </div> */}
      <div className='reviews'>
        <ul className='reviews_ul'>
          {reviews && reviews.map((review, i) => (
            <div key={i}>
            <li>
              {review.text_field}
            </li>
            {user && user.id === review.user_id &&
            <div>
              <div className='delete_review_container'>
              <button type='submit' onClick={async() => {
                await dispatch(removeReview(review.id))
                // window.location.reload()
              }} className='delete_review'><i class="fas fa-trash"></i></button>
              </div>
              <div className="edit_btn_container">
              <button
                className="edit_btn"
                onClick={() => openForm(review)}
              >
                <i className="fas fa-edit"></i>
              </button>
              </div>
              {/* {showForm && review.id === formId ? ( */}
              <form
                onSubmit={(e) => updateReview(review.id, text_field, e)}
                key={review.id}
              >
                <input
                  type="text"
                  value={text_field}
                  onChange={(e) => setBody(e.target.value)}
                />
                <button
                  className="edit_review"
                  type="submit"
                  onSubmit={(e) =>
                    updateReview(review.id, text_field, e)
                  }
                >
                  submit
                </button>
              </form>
              {/* ):null} */}
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
