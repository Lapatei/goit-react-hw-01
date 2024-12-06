import Profile from './Profile.jsx';
import userData from '../userData.json';
import FriendListItem from './FriendListItem.jsx';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory.jsx';
import transactions from '../transactions.json';
import './App.css'

export default function App() {
  return (
    <>
      <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
      <ul className='friends-list'>
        {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
              friends={friend}
            />
        </li>
        ))}
      </ul>
      <TransactionHistory
        items={transactions}
      />
    </>
  )
}