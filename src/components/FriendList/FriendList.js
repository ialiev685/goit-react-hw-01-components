import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={style.item} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
