import React, {Component} from 'react';
import CommentItem from './comment_item';

class CommentList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const comments = this.props.comments.map((comment) => {
      return(
        <CommentItem name={comment.name} comment={comment.comment} key={comment.id} />
      );
    });

    return(
      <div>
        {comments}
      </div>
    );
  }
}

export default CommentList;
