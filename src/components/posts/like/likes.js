import React, {Component} from 'react';

class Likes extends Component {
  constructor(props){
    super(props);
    this.likeComment = this.likeComment.bind(this);
  }

  likeComment(event){
    // this.setState({
    //   count: this.state.count++
    // });
    // console.log(this.state.count);
  }

  render(){
    return(
      <div>
        <button onClick={this.likeComment}>Like</button> 2 people likes this.
      </div>
    );
  }
}

export default Likes;
