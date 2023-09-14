import React, { useState, useEffect } from 'react';
import FilterTransactions from './FilterTransactions';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ financeData }) => {
    const userName = localStorage.getItem("username");
    const filterData = financeData && financeData.financeList.filter((item, idx) => item.userName === userName);
    console.log(filterData);
    const [filteredData, setFilteredData] = useState(filterData);
    const [sortedData, setSortedData] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        date: '',
        amount: '',
        category: '',
        type: '',
    });

    useEffect(() => {
    const applyFilters = () => {
      let filteredResult = filterData;

      if (filterOptions.date) {
        filteredResult = filteredResult.filter(
          (item) => item.date === filterOptions.date
        );
      }
      if (filterOptions.amount) {
        filteredResult = filteredResult.filter(
          (item) => parseFloat(item.amount) === parseFloat(filterOptions.amount)
        );
      }
      if (filterOptions.category) {
        filteredResult = filteredResult.filter(
          (item) => item.category === filterOptions.category
        );
      }
      if (filterOptions.type) {
        filteredResult = filteredResult.filter(
          (item) => item.type === filterOptions.type
        );
      }

      setFilteredData(filteredResult);
    };

    applyFilters();
  }, [financeData, filterOptions]);

  useEffect(() => {
    const applySorting = () => {
      const sortedResult = [...filteredData];

      if (filterOptions.dateSort === 'asc') {
        sortedResult.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (filterOptions.dateSort === 'desc') {
        sortedResult.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (filterOptions.amountSort === 'asc') {
        sortedResult.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
      } else if (filterOptions.amountSort === 'desc') {
        sortedResult.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
      } else if (filterOptions.categorySort === 'asc') {
        sortedResult.sort((a, b) => a.category.localeCompare(b.category));
      } else if (filterOptions.categorySort === 'desc') {
        sortedResult.sort((a, b) => b.category.localeCompare(a.category));
      } else if (filterOptions.typeSort === 'asc') {
        sortedResult.sort((a, b) => a.type.localeCompare(b.type));
      } else if (filterOptions.typeSort === 'desc') {
        sortedResult.sort((a, b) => b.type.localeCompare(a.type));
      }

      setSortedData(sortedResult);
    };

    applySorting();
  }, [filterOptions, filteredData]);

  const handleSort = (field) => {
    if (filterOptions[field] === 'asc') {
      setFilterOptions({ ...filterOptions, [field]: 'desc' });
    } else if (filterOptions[field] === 'desc') {
      setFilterOptions({ ...filterOptions, [field]: '' });
    } else {
      setFilterOptions({ ...filterOptions, [field]: 'asc' });
    }
  };

  const handleFilterChange = (field, value) => {
    setFilterOptions({ ...filterOptions, [field]: value });
  };

    return(
        <div>
            <FilterTransactions filterOptions={filterOptions} handleFilterChange={handleFilterChange}/>
            <div className="table-container">
                <table className="expense-table">
                <TableHead filterOptions={filterOptions} handleSort={handleSort} />
                <TableBody sortedData={sortedData}/>
                </table>
                {sortedData.length === 0 && (
                <div className="nodata-note">
                    No data found. Please add some income or expense!
                </div>
                )}
            </div>
        </div>
        
    )
}

export default Table;



  