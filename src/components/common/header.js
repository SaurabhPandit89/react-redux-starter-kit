import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends Component {
  render(){
    return(
      <div >
        <br />
        <nav>
          <IndexLink to="/">Home</IndexLink>
          {" | "}
          <Link to="/about">About</Link>
          {" | "}
          <Link to="/search_bar">Search</Link>
          {" | "}
          <Link to="/posts">Posts</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
