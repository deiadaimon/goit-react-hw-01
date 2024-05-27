import css from './FriendListItem.module.css'

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend
    return (
    <li className={css.friendListItem}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.friendName}>{name}</p>
        <p className={css.status}>{isOnline ? (<span className={css.online}>Online</span>) : (<span className={css.offline}>Offline</span>)}</p>
    </li>
    )
}

export default FriendListItem