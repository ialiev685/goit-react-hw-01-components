import dataUser from "./json/user.json";
import Profile from "./components/Profile/Profile";

const App = () => {
  const { name, tag, location, avatar, stats } = dataUser;

  return (
    <>
      <Profile
        data={dataUser}
        // name={name}
        // tag={tag}
        // location={location}
        // avatar={avatar}
        // stats={stats}
      />
    </>
  );
};

export default App;
