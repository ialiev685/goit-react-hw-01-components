import user from "../data/user.json";
import statisticalData from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;
