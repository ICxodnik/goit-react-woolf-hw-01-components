import css from './index.module.css';
import FriendListItem from '../FriendListItem/index'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(el => (
                <FriendListItem el={el} />
            ))}
        </ul>)
}

export default FriendList;