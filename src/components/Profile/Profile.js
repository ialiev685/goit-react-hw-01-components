import style from "./Profile.module.css";

const Profile = (props) => {
  const { name, tag, location, avatar, stats } = props;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={name} className="avatar" />
        <p className={style.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
