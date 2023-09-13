const TableHead = ({filterOptions, handleSort}) => {
    return(
          <thead>
            <tr>
              <th>
                Date
                <button
                  className="sort-btn"
                  onClick={() => handleSort('dateSort')}
                >
                  {filterOptions.dateSort === 'asc'
                    ? 'asc'
                    : filterOptions.dateSort === 'desc'
                    ? 'desc'
                    : 'click to sort'}
                </button>
              </th>
              <th>
                Type
                <button
                  className="sort-btn"
                  onClick={() => handleSort('typeSort')}
                >
                  {filterOptions.typeSort === 'asc'
                    ? 'asc'
                    : filterOptions.typeSort === 'desc'
                    ? 'desc'
                    : 'click to sort'}
                </button>
              </th>
              <th>Description</th>
              <th>
                Category
                <button
                  className="sort-btn"
                  onClick={() => handleSort('categorySort')}
                >
                  {filterOptions.categorySort === 'asc'
                    ? 'asc'
                    : filterOptions.categorySort === 'desc'
                    ? 'desc'
                    : 'click to sort'}
                </button>
              </th>
              <th>
                Amount
                <button
                  className="sort-btn"
                  onClick={() => handleSort('amountSort')}
                >
                  {filterOptions.amountSort === 'asc'
                    ? 'asc'
                    : filterOptions.amountSort === 'desc'
                    ? 'desc'
                    : 'click to sort'}
                </button>
              </th>
            </tr>
          </thead>
    )
}

export default TableHead;