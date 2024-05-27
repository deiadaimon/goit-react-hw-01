import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <tr>
                    <th className={css.cell}>Type</th>
                    <th className={css.cell}>Amount</th>
                    <th className={css.cell}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((transaction) => (
                <tr key={transaction.id}>
                        <td className={css.cell}>{transaction.type}</td>
                        <td className={css.cell}>{transaction.amount}</td>
                        <td className={css.cell}>{transaction.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory