import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background-color: lightblue;
  text-align: center;
  font-style: oblique;
  padding: 100px 10px;
  width: 600px;
`;

export const CardProfile = styled.div`
  margin: 0 auto;
  width: 400px;
  background-color: lightcyan;
`;

export const CardContainer = styled.div`
  background-color: white;
  padding: 30px;
  line-height: 0.8;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  border-radius: 100px;
  background-color: aquamarine;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
`;

export const UserLocation = styled.p`
  font-style: normal;
  font-size: 16px;
  color: darkgrey;
`;

export const UserTag = styled.p`
  font-style: normal;
  font-size: 16px;
  color: darkgrey;
`;

export const Quantity = styled.span`
display: block;
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

export const StatsList = styled.li`
  padding: 20px 36px;
  border: 2px solid;
  border-color: darkslategray;
`;

export const Label = styled.span`
  font-style: normal;
  font-size: 16px;
  color: darkgrey;
`;