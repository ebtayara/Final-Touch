//actions
const LOAD_REVIEWS = "photos/LOAD_REVIEWS";
const ADD_REVIEW = "photos/ADD_REVIEW";
const UPDATE_REVIEW = "photos/UPDATE_REVIEW";
const DELETE_REVIEW = "photos/DELETE_REVIEW";

//action creators
const loadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  payload: reviews,
});

export const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  payload: review,
});

const deleteReview = (review) => ({
  type: DELETE_REVIEW,
  payload: review,
});

//thunks
export const getReviews = () => async (dispatch) => {
  console.log("EYO IS THIS WORKING?");
  const res = await fetch(`/api/reviews/all`);
  if (res.ok) {
    const reviews = await res.json();
    console.log("***************REVIEWS****************", reviews);
    dispatch(loadReviews(reviews));
  } else {
    console.log("ERROR FROM GETREVIEWS THUNK");
  }
};

export const createReview = (review) => async (dispatch) => {
  const res = await fetch(`/api/reviews/new/${review.app_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  if (res.ok) {
    const newReview = await res.json();
    await dispatch(addReview(newReview));
    return null;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["Fields must contain a valid entry."];
  }
};

export const editReview = (text_field, review_id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/edit/${review_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text_field }),
  });
  if (res.ok) {
    const editedReview = await res.json();
    dispatch(updateReview(editedReview));
  }
};

export const removeReview = (review_id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/delete/${review_id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteReview(review_id));
  }
};

/** review reducer: object of many reviews by id e.g. { 123: myReview, ... } */
export default function reviews(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case LOAD_REVIEWS:
      // return {...state, reviews: action.payload}
      action.payload.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case ADD_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_REVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_REVIEW:
      const filteredReviews = Object.entries(state)
      // filter out any that match the reviewId
        .filter(([reviewId, _myReview]) => reviewId !== action.payload.id)
        .reduce((acc, [key, val]) => {
          return { ...acc, [key]: val };
        }, {});
      return filteredReviews;

    default:
      return state;
  }
}
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
