import React, {Component} from 'react';
import Header from './common/header';

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;