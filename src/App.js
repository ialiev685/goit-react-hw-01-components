import user from "./json/user.json";
import statisticalData from "./json/statistical-data.json";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";

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
    </>
  );
};

export default App;
