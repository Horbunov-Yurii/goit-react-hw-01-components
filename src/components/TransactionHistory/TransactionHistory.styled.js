import styled from 'styled-components';

export const TransactioTable = styled.table`
  margin: 20px auto;
`;

export const TransactionHead = styled.thead`
  padding: 20px;
  background-color: teal;
  color: #fff;
  text-transform: uppercase;
`;

export const HeadTable = styled.th`
  width: 200px;
  text-align: center;
  padding: 10px;
  border: 1px solid rgb(180, 178, 178);
  box-shadow: 2px 2px 2px grey;
`;



export const TableItem = styled.td`
  width: 200px;
  text-align: center;
  padding: 10px;
  border: 1px solid rgb(180, 178, 178);
  box-shadow: 2px 2px 2px grey;
`;

export const TableBody = styled.tbody`
  tr:nth-child(2n) {
    background-color: lightblue;
  }
`;