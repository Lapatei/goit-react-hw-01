import FriendListItem from "../FriendListItem/FriendListItem"

export default function FriendList({friends}) {
    return (
        <ul className='friends-list'>
        {friends.map(friend => (
        <li key={friend.id}>
                <FriendListItem
                    friends={friend}
                />
        </li>
        ))}
      </ul>
    )
}
