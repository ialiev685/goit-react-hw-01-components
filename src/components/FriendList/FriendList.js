import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";
import PropTypes from "prop-types";

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
