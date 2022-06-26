import { PropTypes } from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friends-list']}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li key={id} className={styles.item}>
          <span className={styles.status}
                  style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
          </span>    
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <span className={styles.label}>{name}</span>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
}
