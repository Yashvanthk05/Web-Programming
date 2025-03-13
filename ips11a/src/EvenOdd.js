import React, { Component } from 'react';

class EvenOddChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      res: ''
    };
  }

  inputChange = (event) => {
    const inno=parseInt(event.target.value)||0;
    const res=inno%2===0?'Even':'Odd';
    this.setState({ num: inno, res: res });
  }

  render() {
    return (
      <div>
        <h2>Even or Odd Checker</h2>
        <input type="number" value={this.state.num} onChange={this.inputChange}/>
        <p>
          The number {this.state.num} is {this.state.res}
        </p>
      </div>
    );
  }
}

export default EvenOddChecker;