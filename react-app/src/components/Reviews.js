import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {getReviews, createReview, editReview, removeReview} from '../store/reviews';
import './styling/Reviews.css';

function Reviews() {
  const user = useSelector(state => state.session.user)
  const reviews = useSelector(state => state.reviews)
  const {app_id} = useParams()
  const [textfield, setBody] = useState('')
  const [newReview, setNewReview] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formId, setFormId] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

    useEffect(() => {
        dispatch(getReviews(app_id))
    }, [dispatch, app_id]);

    const userReview = async (e) => {
        e.preventDefault()
        dispatch(createReview({
            textfield: newReview,
            userId: user.id,
        }))
        setNewReview('')
    };

    const updateReview = async (reviewId, textfield, e) => {
        e.preventDefault()
        await dispatch(editReview(textfield, reviewId))
        setBody('')
        setShowForm(false)
    };

    const deleteReview = (reviewId) => {
        let alert = window.confirm('Are you sure you want to delete?')
        if (alert) {
            dispatch(removeReview(reviewId))
            history.push(`/reviews/${app_id}`)
        }
    };

    const openForm = (review) => {
        setShowForm(true)
        setBody(review.textfield)
        setFormId(review.id)
    };

  if (!user) history.push('/');

  return (
    <div>
      {reviews &&
        Object.values(reviews)?.map(review => {
          return (
            <div key={review.id} className='reviews_container'>
              <div>
                <div className="review">
                  <p>{review.User?.firstName}</p>
                  <p>{review.textfield}</p>
                  {user.id === review.userId && (
                <div>
                    <div className='edit_btn_container'>
                    <button className='edit_btn' onClick={() => openForm(review)}>
                      <i class="fas fa-edit"></i>
                    </button>
                    </div>
                    {showForm && review.id === formId ?
                        <form onSubmit={(e) => updateReview(review.id, textfield, e)} key={review.id}>
                          <input type="text" value={textfield} onChange={(e) => setBody(e.target.value)} />
                          <button className='edit_review' type='submit' onSubmit={(e) => updateReview(review.id, textfield, e)}>edit</button>
                          <button className='delete_review' onClick={() => deleteReview(review.id)}>delete</button>
                        </form>
                        : null}
                </div>
                )}
            </div>
        </div>
    </div>
    )
  })}
    <div>
      <form onSubmit={userReview}>
          <textarea className='textArea' value={newReview} onChange={(e) => setNewReview(e.target.value)} cols="30" rows="10"></textarea>
          <div>
              <button className='submitButton' type='submit'>Submit</button>
          </div>
      </form>
    </div>
  </div>
  )
}

export default Reviews;
