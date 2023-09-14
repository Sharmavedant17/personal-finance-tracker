import React from 'react';
import './Analytics.css';
import Card from '../../components/Card';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { useSelector } from 'react-redux';
import { calculateTotalExpensesAndIncome, randomColor } from '../../utils/analytics';
import { options } from '../../constants/constants';

const Analytics = () => {
  const financeData = useSelector((state) => state.expenses);
  const userName = localStorage.getItem("username");
  const filterData = financeData.financeList.filter((item, idx) => item.userName === userName);
  const { totalExpenses, totalIncome, expenseCategory,  incomeCategory} = calculateTotalExpensesAndIncome(filterData);
  const expenseCategoryWiseColors = Object.keys(expenseCategory).map(() =>randomColor());
  const incomeCategoryWiseColors = Object.keys(incomeCategory).map(() =>randomColor());
  const incomeExpenseData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [totalIncome, totalExpenses],
        backgroundColor: [randomColor(), randomColor()],
      },
    ],
  };
  const expensecategoryWiseData = {
        labels: Object.keys(expenseCategory),
        datasets: [
          {
            data: Object.values(expenseCategory),
            backgroundColor: expenseCategoryWiseColors,
          },
        ],
  };

const incomecategoryWiseData = {
      labels: Object.keys(incomeCategory),
      datasets: [
        {
          data: Object.values(incomeCategory),
          backgroundColor: incomeCategoryWiseColors,
        },
      ],
};

const cardsData = [
  {id: "1", title: "Total Income", amount: totalIncome, className:"pink"},
  {id: "2", title: "Total Expenses", amount: totalExpenses, className:"green"},
  {id: "3", title: "Total Balance", amount: totalIncome - totalExpenses, className:"purple"}
]



   return (
    <div className='dashboard-container'>
      <div className='card-container'>
        {
          cardsData.map((item, idx) => {
            return  <Card key={idx} title={item.title} amount={item.amount} className={item.className}/>
          })
        }
      </div>
      <div className='chart-container'>
        <div className="donut-chart">
          <h3>
            Income VS Expenses
          </h3>
            <Doughnut data={incomeExpenseData} options={options} />
        </div>
        <div className='donut-chart'>
          <h3>
            Expenses Categories
          </h3>
          <Doughnut data={expensecategoryWiseData} options={options} />
        </div>
        <div className='donut-chart'>
          <h3>
            Income Categories
          </h3>
          <Doughnut data={incomecategoryWiseData} options={options} />
        </div>
      </div>
    </div>
  );
}


export default Analytics;
