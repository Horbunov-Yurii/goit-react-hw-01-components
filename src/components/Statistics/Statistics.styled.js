import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  background-color: lightblue;
  font-style: oblique;
  padding: 80px;
  width: 600px;
`;

export const SectionCard = styled.div`
  background-color: #fff;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 40px;
  font-style: normal;
  text-transform: uppercase;
  color: grey;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

export const Item = styled.li`
  padding: 20px 36.5px;
  border: 1.5px solid;
  border-color: darkslategray;
`;


export const ItemLabel = styled.span`
  color: #fff;
  font-style: normal;
`;

export const ItemPercentage = styled.span`
  font-size: 25px;
`;