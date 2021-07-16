import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postActions";

class Posts extends React.Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
}

//this state.posts comes from the combineReducers, that return postReducer by the key posts
//the key posts will call the postsReducer, and that will return the fetched posts by the key items

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);