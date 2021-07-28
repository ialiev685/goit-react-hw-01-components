import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? `${style.status} ${style.isOnline}` : style.status;
  return (
    <>
      <span className={status}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </>
  );
};

export default FriendListItem;
