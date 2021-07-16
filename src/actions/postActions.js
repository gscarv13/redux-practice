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