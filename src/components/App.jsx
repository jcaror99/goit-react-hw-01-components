import "../index.css"
import user from '../json/user.json'
import data from '../json/data.json'
import friends from '../json/friends.json'
import transactions from '../json/transactions.json'

import Profile from './Profile/Profile.jsx'
import Statistics from "./Statistics/Statistics.jsx";
import Friends from './Friends/Friends.jsx'
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx"

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ul>
        <li>
          <Profile
            username={user.username}
            tag={ user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </li>
        <li>
          <Statistics
            title="Upload stats" stats={data}
          />
        </li>
        <li>
          <Statistics
            stats={data}
          />
        </li>
        <li>
          <Friends
            friends={friends}
          />
        </li>
        <li>
          <TransactionHistory
            items={transactions}
          />
        </li>
      </ul>
    </div>
  );
};
