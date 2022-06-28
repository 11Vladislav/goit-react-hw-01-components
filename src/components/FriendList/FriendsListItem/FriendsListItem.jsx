import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

export const FriendsListItem = ({ name, avatar, isOnline}) => {
    return ( 
        <li className={styles.item}>
            <span className={styles.status}
                  style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
            </span>    
            <span className={styles.avatar}>
                <img src={avatar} alt={name} width="48" height="48" />
            </span>
            <span className={styles.label}>{name}
            </span> 
        </li>
    )
}

FriendsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
