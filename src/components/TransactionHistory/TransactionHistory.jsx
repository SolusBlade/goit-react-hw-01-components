import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

import s from './TransactionHistory.module.css';

import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.transactionHeader}>
          <th className={s.transactionHeaderItem}>Type</th>
          <th className={s.transactionHeaderItem}>Amount</th>
          <th className={s.transactionHeaderItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
<ul className={s.friendsList}></ul>;
