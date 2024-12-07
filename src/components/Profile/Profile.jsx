import './Profile.css'

export default function Profile({ name, tag, location, stats, image }) {
    return (
    <div className='profile-card'>
        <div className='profile-info'>
            <img src={image} alt="User avatar" width='84'/>
            <p>{name}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>
        <ul className='profile-stats'>
            <li className='profile-stats-item'>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li className='profile-stats-item'>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li className='profile-stats-item'>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}
