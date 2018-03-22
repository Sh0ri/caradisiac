import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const API = '/api/';
const DEFAULT_QUERY = 'suv';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
    .then(response => response.json())
    .then(data => this.setState({ data: data }))
    .then(()=>{console.log(this.state)});
  }


  render() {
    const { data } = this.state;
    return (




      <div id='root' className="App">
      {data.map(object =>
        //FOREACH
        <div id="object">
        HALLED
        </div>
        )}
      </div>
      );
  }
}

export default App;
