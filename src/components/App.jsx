import Profile from './Profile/Profile.jsx';
import userData from '../userData.json';
import FriendList from './Friendlist/FriendList.jsx';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
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
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </>
  )
}