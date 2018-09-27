import React, { Component } from 'react';
import changeCalculator from './functions/change-calculator';
import { renderTextResult } from './functions/money-translator';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      inputMoney : 0,
      yourChange : []
    }
  }

  handleChange = (e) =>{
    this.setState({inputMoney:e.target.value})
  }

  handleSubmitMoney = () => {
    let changes = changeCalculator(this.state.inputMoney)
    this.setState({yourChange:changes})
  }

  render() {  
    let { yourChange, inputMoney } = this.state
    return (
      <React.Fragment>
        <div className="container p-5 d-flex align-items-center justify-content-center text-center" style={{minHeight:'100vh'}}>
          <div>
            <input type="number" onChange={this.handleChange}/>
            <div className="py-1">
              <button onClick={this.handleSubmitMoney}>Change This</button>
            </div>
            <div>You put ${inputMoney}</div>
            <div className="py-3">
              {
                yourChange.length > 0 ?
                  <h2>Your change is {renderTextResult(yourChange)}</h2>       
                  :
                  <h2>Your change is nothing.</h2>
              }
            </div>
          </div>
        </div>
        <div className="w-100 text-center position-fixed" style={{bottom:0}}>created by Chanatorn Suphap</div>
      </React.Fragment>
  )}
}

export default App;
