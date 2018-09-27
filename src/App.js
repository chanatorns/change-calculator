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
          <div className="text-center">
            <div className="input-group mx-auto mb-1" style={{width:300}}>
              <input className="form-control" type="number" 
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-success btn-block" 
                  onClick={this.handleSubmitMoney} disabled={inputMoney.length>0 ? false : true}
                >
                  Change This
                </button>
              </div>
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
        <div className="w-100 text-center text-muted position-fixed" style={{bottom:0}}>created by Chanatorn Suphap</div>
      </React.Fragment>
  )}
}

export default App;
