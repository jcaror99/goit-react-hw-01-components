import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
return (
    <li className={css.item} key={id}>
        <span className={isOnline ? css.isOnline : css.isNotOnline}></span>
        <img className="avatar" src={avatar} alt={name}/>
        <p className="name">{name}</p>
    </li>
    )
}

export default FriendListItem