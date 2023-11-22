const Profile = ({ username, tag, location, avatar, stats }) => {
    const statsKeyArray = Object.keys(stats);
    const statsValueArray = Object.values(stats);
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className="stats">
                <li>
                    <span className="label">{statsKeyArray[0]}</span>
                    <span className="quantity">{statsValueArray[0]}</span>
                </li>
                <li>
                    <span className="label">{statsKeyArray[1]}</span>
                    <span className="quantity">{statsValueArray[1]}</span>   
                </li>
                <li>
                    <span className="label">{statsKeyArray[2]}</span>
                    <span className="quantity">{statsValueArray[2]}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;