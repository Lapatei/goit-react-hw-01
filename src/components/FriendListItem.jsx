import './FriendListItem.css'
import clsx from "clsx";

export default function FriendListItem({friends}) {
    const statusClass = clsx({
        'online': friends.isOnline,
        'offline': !friends.isOnline
    });

    return (
        <div className='friend-card'>
            <img src={friends.avatar} alt="Avatar" width="48" />
            <p>{friends.name}</p>
            <p className={statusClass}>{friends.isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
}