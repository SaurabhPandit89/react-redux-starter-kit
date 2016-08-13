import React, {Component} from 'react';
import Likes from './../like/likes';

class CommentItem extends Component {
  constructor(props){
    super(props);
    this.likeComment = this.likeComment.bind(this);
  }

  likeComment(event){
    console.log('like it');
  }

  render(){
    return(
      <div style={{border: '1px solid grey', padding: '5px', marginBottom: '10px'}}>
        <p>
          Name: {this.props.name}
          <br />
          Comment: {this.props.comment}
        </p>
        <Likes />
      </div>
    );
  }
}

export default CommentItem;
