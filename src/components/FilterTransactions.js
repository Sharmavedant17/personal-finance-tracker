
import {categoryData} from '../constants/constants'


const FilterTransactions = ({filterOptions, handleFilterChange}) => {
    return(
        <div className="filter-section">
         <div className="filter-heading">
            <h3>Filters::</h3>
        </div>
        <div className="filter-item">
          <label className="margin-rt">Date:</label>
          <input
            type="date"
            value={filterOptions && filterOptions.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label className="margin-rt">Amount:</label>
          <input
            type="number"
            value={filterOptions && filterOptions.amount}
            onChange={(e) => handleFilterChange('amount', e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <div className="filter-item">
          <label className="margin-rt">Category:</label>
          <select
            value={filterOptions && filterOptions.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="">All</option>
            {
                categoryData.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })
            }
          </select>
        </div>
        <div className="filter-item">
          <label className="margin-rt">Type:</label>
          <select
            value={filterOptions && filterOptions.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        </div>
    )
}

export default FilterTransactions;