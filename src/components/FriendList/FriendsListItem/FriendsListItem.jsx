import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

export const FriendsListItem = ({ name, avatar, isOnline, id }) => {
    return ( 
        <li className={styles.item} key={id} >
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
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    )
}
