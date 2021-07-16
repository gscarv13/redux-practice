import { FETCH_POSTS, NEW_POST } from "./types";

// arrow function that returns another function. ES6 syntax
export const fetchPosts = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      // the connected component can dispatch actions by itself, no need for store.dispatch!
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts,
      }));
}

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post,
    }));
}