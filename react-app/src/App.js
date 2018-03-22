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
    var reg =/[ ]/g;
    const { data } = this.state;
    return (




      <div id='root' className="row">
      <div class="list-group col-sm-6" id="root" className= "App">
      {data.map(object =>
        //FOREACH
        <a  key={object.uuid} className="list-group-item list-group-item-action col-sm-8" href={object.url}>
        <h1>{object.name}</h1>
        </a>
        )}
      </div>
      </div>
      );
  }
}

export default App;
