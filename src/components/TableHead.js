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
                  {filterOptions && filterOptions.dateSort === 'asc'
                    ? 'asc'
                    : filterOptions && filterOptions.dateSort === 'desc'
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
                  {filterOptions &&  filterOptions.typeSort === 'asc'
                    ? 'asc'
                    : filterOptions && filterOptions.typeSort === 'desc'
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
                  {filterOptions && filterOptions.categorySort === 'asc'
                    ? 'asc'
                    : filterOptions && filterOptions.categorySort === 'desc'
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
                  {filterOptions && filterOptions.amountSort === 'asc'
                    ? 'asc'
                    : filterOptions && filterOptions.amountSort === 'desc'
                    ? 'desc'
                    : 'click to sort'}
                </button>
              </th>
            </tr>
          </thead>
    )
}

export default TableHead;