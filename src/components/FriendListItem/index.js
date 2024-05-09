import css from './index.module.css';

const FriendListItem = ({ el }) => {
    return (
        <li className={css.item} key={el.id}>
            <span className={el.isOnline ? css.activeStatus : css.passiveStatus}></span>
            <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{el.name}</p>
        </li>
    )
}

export default FriendListItem;