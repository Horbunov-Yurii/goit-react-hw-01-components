import propTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <li key={id}>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </li>
    </>
  );
};



FriendListItem.propTypes = {
  id: propTypes.number,
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
};