import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
    const { followers, views, likes } = stats
    return (
<div className={css.container}>
    <div>
        <img className={css.picture} src={image} alt="User avatar"/>
        <p className={css.username}>{name}</p>
        <p className={css.about}>@{tag}</p>
        <p className={css.about}>{location}</p>
    </div>

    <ul className={css.statistic}>
        <li className={css.statisticCell}>
            <span className={css.statisticItem}>Followers</span>
            <span className={css.statisticValue}>{followers}</span>
        </li>
        <li className={css.statisticCell}>
            <span className={css.statisticItem}>Views</span>
            <span className={css.statisticValue}>{views}</span>
        </li>
        <li className={css.statisticCell}>
            <span className={css.statisticItem}>Likes</span>
            <span className={css.statisticValue}>{likes}</span>
        </li>
    </ul>
        </div>
    )
}

export default Profile