import Statistic from 'components/Statistics';
import user from 'data/user.json';
import Profile from 'components/Profile';
import data from 'data/data.json';
import FriendList from 'components/FriendList';
import friends from 'data/friends.json';
import Transaction from 'components/TransactionHistory';
import transactions from 'data/transactions.json';
import './index.css';

export const App = () => {
  return (
    <div className="application">
      <Transaction items={transactions} />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />

      <Statistic title="Upload stats" stats={data} />
    </div>
  );
};
