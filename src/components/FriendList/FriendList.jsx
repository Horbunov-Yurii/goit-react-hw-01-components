import { FriendListItem } from './FriendListItem/FriendListItem';


export const FriendList = ({friends}) => {
    return (
    <>
    <ul>
     {friends.map(({avatar, name, isOnline, id})=>(
       <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} id={id}/>
     ))}
    </ul>
    </>
    )
};


