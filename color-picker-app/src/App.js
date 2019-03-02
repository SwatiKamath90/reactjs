import React, { Component } from 'react';
import Navbar from './Navbar';
import TextField from '@material-ui/core/TextField';
import ColorCard from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'blue'
    }
    this.changeCardColor = this.changeCardColor.bind(this);
  }

  changeCardColor(event) {
    console.log(event);
    this.setState({color: event.target.value});
  }

  render() {
    return (
      <div align="center">
        <Navbar />
        <br/>
        <ColorCard color={this.state.color}/>
        <TextField placeholder="Type a color code" 
        onChange={this.changeCardColor}/>
      </div>
    );
  }
}

export default App;