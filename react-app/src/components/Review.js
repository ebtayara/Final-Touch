import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {createReview, editReview, removeReview, getReviews} from '../store/reviews';
import './styling/Review.css';

  const Review = () => {
  const user = useSelector(state => state.session.user)
  const review = useSelector(state => state.review.review)
  // const appointment = useSelector(state => state.appointment.appointment)
  const {id} = useParams()
  // const {user_id} = useParams()
  const [text_field, setBody] = useState('')
  const [newReview, setNewReview] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formId, setFormId] = useState(null)
  const [reviewOk, setReviewOk] = useState(false)
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch()
  const history = useHistory()

  //need to add another useEffect() to grab the review data again so it doesn't disappear upon refresh

  const userReview = async(e) => {
      e.preventDefault()
      const reviewErrors = await dispatch(createReview({
          text_field: newReview,
          user_id: user.id,
          app_id: Number(id)
      }))
      // console.log(reviewErrors)
      if(reviewErrors) {
        setErrors(reviewErrors)
      } else {
        setBody(review?.text_field)
      }
      setNewReview('')
  };

  const updateReview = async(review_id, text_field, e) => {
      e.preventDefault()
      await dispatch(editReview(text_field, review_id))
      setBody('')
      setShowForm(false)
  };

  const deleteReview = (review_id) => {
        let alert = window.confirm('Are you sure you want to delete?')
        if (alert) {
            dispatch(removeReview(review_id))
            history.push(`/appointments`)
            // history.push(`/reviews/${id}/${user_id}`)
        }
    };

  useEffect(() => {
      if(review) {
        if(review.app_id !== Number(id)) {
          user.review.forEach(user_review => {
            if(user_review.app_id === Number(id)) {
            setReviewOk(true)
            dispatch(getReviews(user_review))
          }})
        } else {
          setReviewOk(true)
          setBody(review.text_field)
          setFormId(review.id)
        }
      }
    }, [dispatch, review, formId, id, user.review]);

    const openForm = () => {
        setShowForm(true)
  };

  if (!user) history.push('/');

  return (
  <div className='reviews_outer_container'>
    <div className='review_body'>
            <div>
              {errors && errors.map((error, i) => (
              <div key={i}>{error.slice(error.indexOf(':') + 1)}</div>
              ))}
            </div>
    {reviewOk&&
      <div key={review.id} className='reviews_container'>
            <div className="review">
              <p>{review.User?.full_name}</p>
              <p>{review.text_field}</p>
            </div>
              <div className='edit_btn_container'>
                <button className='edit_btn' onClick={() => openForm(review)}>
                  <i className="fas fa-edit"></i>
                </button>
              </div>
                {showForm && review.id === formId ?
                    <form onSubmit={(e) => updateReview(review.id, text_field, e)} key={review.id}>
                      <input type="text" value={text_field} onChange={(e) => setBody(e.target.value)} />
                      <button className='edit_review' type='submit' onSubmit={(e) => updateReview(review.id, text_field, e)}>edit</button>
                      <button className='delete_review' onClick={() => deleteReview(review.id)}>delete</button>
                    </form>
                    : null}
      </div>
            }
    <div>
      {!review &&
      <form onSubmit={userReview}>
          <div>
            <textarea className='textArea' value={newReview} onChange={(e) => setNewReview(e.target.value)} cols="30" rows="10"></textarea>
          </div>
          <div>
              <button className='submitButton' type='submit'>Submit</button>
          </div>
      </form>
    }
    </div>
  </div>
</div>
)};

export default Review;
