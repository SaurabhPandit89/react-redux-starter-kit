import React, {Component} from 'react';
import ResultList from './result_list';

class SeacrhBar extends Component {
  constructor(props){
    super(props);
    // This line is to bind any custom method you define, with the Component
    this.onInputChange = this.onInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {query : '', results: []};
  }

  onInputChange(event){
    this.setState({query: event.target.value});
    // console.log(event.target.value);
  }

  onClick(event){
    this.setState({
        results: [
          {
            id: 1,
            name: 'Saurabh Pandit',
            comment: 'React is Awesome'
          },
          {
            id: 2,
            name: 'Syed Mehndi',
            comment: 'I feel the same'
          },
          {
            id: 3,
            name: 'Nikita Singh',
            comment: 'I am enjoying coding in React'
          }
        ]
    });
  }

  render(){
    return (
      <div>
        <br /><br />
        <input type="text" placeholder="Enter Search text" onChange={this.onInputChange} value={this.state.query}/>
        <button onClick={this.onClick}>Search</button>
        <br/><br/>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SeacrhBar;
