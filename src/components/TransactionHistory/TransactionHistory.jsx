const TransactionHistory = ({ items } ) => {
    return (
        <table className="transactionHistory">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((element) => (
                    <tr key={element.id}>
                        <td>{element.type}</td>
                        <td>{element.amount}</td>
                        <td>{element.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory