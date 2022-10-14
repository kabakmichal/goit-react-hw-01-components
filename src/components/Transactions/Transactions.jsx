import PropTypes from "prop-types";
import TransactionsCSS from "./Transactions.module.css";

const Transactions = ({ items }) => {
  const transRender = items.map((item) => {
    return (
      <tr className={TransactionsCSS.row} key={item.id}>
        <td className={TransactionsCSS.cell}>{item.type}</td>
        <td className={TransactionsCSS.cell}>{item.amount}</td>
        <td className={TransactionsCSS.cell}>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className={TransactionsCSS.transactionHistory}>
      <thead className={TransactionsCSS.head}>
        <tr>
          <th className={TransactionsCSS.headCell}>Type</th>
          <th className={TransactionsCSS.headCell}>Amount</th>
          <th className={TransactionsCSS.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>{transRender}</tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Transactions;
