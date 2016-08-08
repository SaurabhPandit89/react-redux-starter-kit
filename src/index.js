/* eslint-disable no-console */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';

console.log('hi');
// const App = function(){
//   return <h2>It Works...Hurray</h2>;
// };

class App extends Component {
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
export default App;
