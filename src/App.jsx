import Statistic from 'components/Statistics';
import user from './user.json';
import Profile from 'components/Profile';
import data from './data.json';
import FriendList from 'components/FriendList';
import friends from './friends.json';
import Transaction from 'components/TransactionHistory';
import transactions from './transactions.json';
import "./index.css";

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
