import { PropTypes } from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={styles['transaction-history']}>
        <thead >
            <tr>
            <th className={styles.title}>Type</th>
            <th className={styles.title}>Amount</th>
            <th className={styles.title}>Currency</th>
            </tr>
        </thead>
            <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className={styles.element}>
                <td className={styles.item}>{type}</td>
                <td className={styles.item}>{amount}</td>
                <td className={styles.item}>{currency}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}
    
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
}