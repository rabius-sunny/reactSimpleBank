import React, { useState } from 'react'
import './App.css';


function App() {
  const [deposit, setDeposit] = useState(0)
  const [withdraw, setWithdraw] = useState(0)
  const [amount, setAmount] = useState(1000)
  const handleDeposit = e => {
    let money = parseFloat(e.target.value)
    setDeposit(money)
  }
  const handleWithDraw = e => {
    let money = parseFloat(e.target.value)
    setWithdraw(money)
  }
  const handleDepositBtn = () => {
    if (deposit > 0) {
      setAmount(amount + deposit)
    }
  }
  const handleWithDrawBtn = () => {
    if (withdraw > 0) {
      setAmount(amount - withdraw)
    }
  }
  return (
    <div className="App">
      <div>
        <h1 className="text-center headbg p-5 text-white">Welcome To Ocean Bank</h1>
      </div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="showItem1 text-center">
                <h3>Deposit</h3>
                <h1>$ {deposit}</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="showItem2 text-center">
                <h3>WithDraw</h3>
                <h1>$ {withdraw}</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="showItem3 text-center">
                <h3>Total</h3>
                <h1>$ {amount}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inputItems">
        <div className="container">
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-6">
                <div className="myCard">
                  <h3>Deposit</h3>
                  <input onChange={handleDeposit} className="form-control" type="number" placeholder="Enter your Deposit amount" /> <br />
                  <button onClick={handleDepositBtn} className="btn btn-outline-light">Deposit</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="myCard">
                  <h3>Withdraw</h3>
                  <input onChange={handleWithDraw} className="form-control" type="number" placeholder="Enter your Withdraw amount" /> <br />
                  <button onClick={handleWithDrawBtn} className="btn btn-outline-light">Withdraw</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
