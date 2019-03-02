import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

class ColorCard extends Component {

render() {
  let cardStyle = {
    width:'200px',
    height:'200px',
    backgroundColor:this.props.color
  };
  
  return (
    <div >
      <Card style ={cardStyle}>
      </Card>
    </div>
    );
  }  
}

export default ColorCard;
