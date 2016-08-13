import React, {Component} from 'react';
import CommentList from './comments/comment_lists';
import Likes from './like/likes';

class Posts extends Component {
  constructor(props){
    super(props);
    this.onClickComment = this.onClickComment.bind(this);
    this.state = {comments: []};
  }

  onClickComment(event){
    this.setState({
      comments: [
        {
          id: 1,
          name: 'John',
          comment: 'This is first comment'
        },
        {
          id: 2,
          name: 'Sean',
          comment: 'This is second comment'
        }
      ]
    });
  }

  render(){
    return(
      <div style={{border: '1px solid #000', padding: '10px 10px 10px 10px', marginTop: '40px'}}>
        <br/>
        <div style={{padding: '5px 5px 5px 5px'}}>
          <p> Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so. </p>
          <Likes />
        </div>
        <div style={{border: '1px solid grey', padding: '10px 10px 10px 10px'}}>
          <CommentList comments={this.state.comments} />
          <br /><br />
          <label>
            <input type="text" placeholder="Enter comment" />
            <button onClick={this.onClickComment}>Comment</button>
          </label>
        </div>
      </div>
    );
  }
}

export default Posts;
