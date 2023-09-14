const TableBody = ({sortedData}) => {
    return(
          <tbody>
            {sortedData && sortedData.length > 0 &&
              sortedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>₹{item.amount && item.amount.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
    )
}

export default TableBody;