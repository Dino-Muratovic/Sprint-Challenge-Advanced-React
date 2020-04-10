import React from 'react';
import './App.css';
import axios from 'axios';
import Body from './Body';



class App extends React.Component {
  constructor(){
    super();
    this.state= {};      
     
  }

  //Lifecycle method
componentDidMount(){
  this.fetchData();

}

fetchData = () => {
  //Fetch the data
  axios.get('http://localhost:5000/api/players')
  //promises
  .then(response => {
    console.log(`this is reponse data -->`, response.data);
    
  //Set the state to what we drilled to
  this.setState({
    arrayOfData: response.data
  })  

  })
  //catch errors if any
  .catch(error => {
    console.log(`there was an error`, error)
  })
}





  render() {
    return (
      <div className="App">
        <Body getData={this.state.arrayOfData} key={this.state.id} />        
      </div>
    )
  }
}

  export default App;
