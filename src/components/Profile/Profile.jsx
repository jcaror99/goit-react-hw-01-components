import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
    const statsKeyArray = Object.keys(stats);
    const statsValueArray = Object.values(stats);
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li>
                    <span className={css.label}>{statsKeyArray[0]}</span>
                    <span className={css.quantity}>{statsValueArray[0]}</span>
                </li>
                <li>
                    <span className={css.label}>{statsKeyArray[1]}</span>
                    <span className={css.quantity}>{statsValueArray[1]}</span>   
                </li>
                <li>
                    <span className={css.label}>{statsKeyArray[2]}</span>
                    <span className={css.quantity}>{statsValueArray[2]}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;