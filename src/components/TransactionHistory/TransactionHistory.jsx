import propTypes from 'prop-types';
import {
  TransactioTable,
  TransactionHead,
  HeadTable,
  TableItem,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <TransactioTable>
        <TransactionHead>
          <tr>
            <HeadTable>Type</HeadTable>
            <HeadTable>Amount</HeadTable>
            <HeadTable>Currency</HeadTable>
          </tr>
        </TransactionHead>

        <TableBody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <TableItem>{type}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </tr>
          ))}
        </TableBody>
      </TransactioTable>
    </>
  );
};



TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  )
}