import { PropTypes } from 'prop-types';
import styles from './FriendList.module.css';
import { FriendsListItem } from "./FriendsListItem/FriendsListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friends-list']}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendsListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  )
}