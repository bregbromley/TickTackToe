import React, { Component } from 'react';


class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  onClick(e) {
    let id = e.target.id;
    let element =  document.getElementById(id);
    let text = document.getElementById(id).innerHTML;
    if (text === '') {
      element.innerHTML = 'X';
    } else if (text === 'X') {
      element.innerHTML = 'O';
    } else {
      element.innerHTML = '';
    }

    console.log(e.target.id);
  }

  render() {
    return (
      <table onClick={this.onClick}>
      <tr>
        <td id='1'>X</td>
        <td id='2'>X</td>
        <td id='3'>X</td>
      </tr>
      <tr>
        <td id='4'>X</td>
        <td id='5'>X</td>
        <td id='6'>X</td>
      </tr>
      <tr>
        <td id='7'>X</td>
        <td id='8'>X</td>
        <td id='9'>X</td>
      </tr>
    </table>
    )
  }
}

export default Board;