import s from './TransactionHistoryItem.module.css';

import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.transactionHeader}>
      <td className={s.transactionHeaderItem}>{type}</td>
      <td className={s.transactionHeaderItem}>{amount}</td>
      <td className={s.transactionHeaderItem}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
