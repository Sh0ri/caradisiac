import React, { Component } from 'react';
import loading from './loading.gif';
import './App.css';


const API = '/api/';
const DEFAULT_QUERY = 'suv';

const loadingStyle = {
  margin:'auto',
  padding:'500 auto',
  width:'40%'
};

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
    .then(data => this.setState({ data: data }));
  }

  Update(){
    this.setState({data:null});
    fetch(API + 'populate')
    .then(response => response.json())
    .then(() => this.componentDidMount());
  }

  Go_To_Href(url){
    window.open(url);
  }

  OrderBy(item){
    var temp_data = this.state.data;
    console.log(temp_data);
    if(item==='brand')
      temp_data.sort((a,b) => a.brand.localeCompare(b.brand));
    if(item==='model')
      temp_data.sort((a,b) => a.model.localeCompare(b.model));
    if(item==='name')
      temp_data.sort((a,b) => a.name.localeCompare(b.name));
    if(item==='volume')
      temp_data.sort((a,b) => a.volume.localeCompare(b.volume));

    this.setState({ data: temp_data });
  }


  render() {
    const { data } = this.state;
    if(data){
      return (




        <div id='root' className="container" style={{padding:'160px'}}>


        <button type="button" class="btn btn-primary" onClick={()=>{this.Update()}}>Update</button>
        <br/>
        <br/>

        <table className="table table-hover table-bordered table-hover-cells">
        <thead>
        <tr>
        <th scope="col-sm-auto" onClick={()=>{this.OrderBy('brand')}}>Brand</th>
        <th scope="col-sm-auto" onClick={()=>{this.OrderBy('model')}}>Model</th>
        <th scope="col-sm-auto" onClick={()=>{this.OrderBy('name')}}>Name</th>
        <th scope="col-sm-auto" onClick={()=>{this.OrderBy('volume')}}>Volume</th>
        </tr>
        </thead>
        <tbody>
        {data.map(object =>
        //FOREACH
        <tr class='clickable-row' href={object.url} onClick={()=>{this.Go_To_Href(object.url)}}>
        <th scope="row">{object.brand}</th>
        <td>{object.model}</td>
        <td>{object.name}</td>
        <td>{object.volume.length > 0 ? object.volume : '???'}</td>
        </tr>
        )}
        </tbody>

        </table>
        </div>
        );

    }
    else
      return (
        <div className="image-container" style={{padding:'160px auto'}}>
        <img src={loading} alt="loading" style={loadingStyle}/>
        </div>
        );
  }
}

export default App;
