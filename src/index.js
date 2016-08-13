/* eslint-disable no-console */
import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));

// console.log('hi');
// const App = function(){
//   return <h2>It Works...Hurray</h2>;
// };

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {labelText: 'Search Query : ', klassName: 'jumbotron'};
//   }
//
//   render(){
//     return (
//       <div>
//         <SearchBar label={this.state.labeText} className={this.state.klassName}/>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<App/>, document.getElementById('app'));
// export default App;
