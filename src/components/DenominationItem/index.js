import './index.css'

const DenominationItem = props => {
  const {itemDetails, updateBalance} = props

  const {value} = itemDetails

  const ClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={ClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
