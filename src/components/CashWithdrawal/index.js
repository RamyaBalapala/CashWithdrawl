import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    return (
      <div className="main-bg-container">
        <div className="app-container">
          <div className="name-container">
            <div className="name-logo">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <p className="balance-amount">{balance}</p>
          </div>
          <p className="in-rupees-heading">In Rupees</p>
          <p className="withdraw-heading">Withdraw</p>
          <p className="withdraw-info">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-main-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                itemDetails={eachItem}
                key={eachItem.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
