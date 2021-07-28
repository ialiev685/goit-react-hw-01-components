import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = (props) => {
  return (
    <ul className={style.friendList}>
      {props.friends.map(({ avatar, name, isOnline, id }) => {
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
