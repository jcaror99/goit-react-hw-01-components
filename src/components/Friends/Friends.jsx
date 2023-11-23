import FriendListItem from '../FriendListItem/FriendListItem.jsx'

const Friends = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map((element) => (
                <FriendListItem
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