import FriendListItem from '../FriendListItem/FriendListItem.jsx'

const Friends = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map((element) => (
                <FriendListItem
                    key={element.id} 
                    avatar={element.avatar}
                    name={element.name}
                    isOnline={element.isOnline}
                    id ={element.id}
                />
            ))
            }
        </ul>
    )
}

export default Friends