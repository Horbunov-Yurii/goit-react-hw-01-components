import propTypes from 'prop-types';
import user from '../../data/user.json';
import {
  Container,
  CardProfile,
  CardContainer,
  Avatar,
  Stats,
  StatsList,
  UserName,
  Quantity,
  UserLocation,
  UserTag,
  Label,
} from './Profile.styled';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const Profile = () => {
  return (
    <Container>
      <CardProfile>
        <CardContainer>
          <Avatar src={avatar} alt={username} />
          <UserName>{username}</UserName>
          <UserTag>@{tag}</UserTag>
          <UserLocation>{location}</UserLocation>
        </CardContainer>

        <Stats>
          <StatsList>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatsList>
          <StatsList>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatsList>
          <StatsList>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatsList>
        </Stats>
      </CardProfile>
    </Container>
  );
};


Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
};