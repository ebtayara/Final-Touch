//actions
const LOAD_REVIEWS = 'photos/LOAD_REVIEWS'
const ADD_REVIEW = 'photos/ADD_REVIEW'
const UPDATE_REVIEW = 'photos/UPDATE_REVIEW'
const DELETE_REVIEW = 'photos/DELETE_REVIEW'

//action creators
const loadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  payload: reviews
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: review
});

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  payload: review
});

const deleteReview = (review) => ({
  type: DELETE_REVIEW,
  payload: review
});

//thunks
export const getReviews = (app_id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${app_id}`)
  if (res.ok) {
      const reviews = await res.json()
      dispatch(loadReviews(reviews))
  }
};

export const createReview = (review) => async (dispatch) => {
  const res = await fetch(`/api/reviews/new/${review.app_id}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
  })
  if (res.ok) {
      const newReview = await res.json()
      dispatch(addReview(newReview))
  }
};

export const editReview = (text_field, review_id) => async (dispatch) => {
  const res = await fetch (`/api/reviews/${review_id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({text_field})
  })
  if (res.ok) {
      const editedReview = await res.json()
      dispatch(updateReview(editedReview))
  }
};


export const removeReview = (review_id) => async (dispatch) => {
  const res = await fetch (`/api/reviews/${review_id}`, {
      method: 'DELETE'
  })
  if (res.ok) {
      dispatch(deleteReview(review_id))
  }
};

//reducer
export default function reviewsReducer(state = {review:null, reviews:null}, action) {
    switch (action.type) {
        case LOAD_REVIEWS:
            return {...state, reviews: action.payload}
        case ADD_REVIEW:
            return {...state, review: action.payload}
        case UPDATE_REVIEW:
            return {...state, review: action.payload}
        case DELETE_REVIEW:
            return state
        default:
            return state;
    }
};
  // let newState;
  //   switch (action.type) {
  //       case LOAD_REVIEWS: {
  //           newState = {}
  //           action.reviews.forEach(review => {
  //               newState[review.id] = review
  //           });
  //           return newState
  //         }
  //         case ADD_REVIEW: {
  //           newState = {...state}
  //             newState[action.review.id] = action.review
  //             return newState
  //         }
  //         case UPDATE_REVIEW: {
  //           newState = {...state}
  //             newState[action.review.id] = action.review
  //             return newState
  //         }
  //         case DELETE_REVIEW: {
  //           newState = {...state}
  //             delete newState[action.review]
  //             return newState
  //           // newState = {...state, review:action.review}
  //           //   return newState
  //         }
  //         default:
  //             return state
  //   }
  // };
