import React from 'react';
import './Analytics.css';
import Card from '../../components/Card';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { useSelector } from 'react-redux';


const Analytics = () => {
  const financeData = useSelector((state) => state.expenses);
  const userName = localStorage.getItem("username");
  const filterData = financeData.financeList.filter((item, idx) => item.userName === userName);
  const calculateTotalExpensesAndIncome = (transactions) => {
    let totalExpenses = 0;
    let totalIncome = 0;
    let expenseCategory = {};
    let incomeCategory = {};
  transactions.forEach((transaction) => {
    if (transaction.type === "expense") {
      totalExpenses += transaction.amount;
      if (transaction.category in expenseCategory) {
        expenseCategory[transaction.category] += transaction.amount
      }else {
        expenseCategory[transaction.category] = transaction.amount;
      }
    } else if (transaction.type === "income") {
      totalIncome += transaction.amount;
      if (transaction.category in incomeCategory) {
        incomeCategory[transaction.category] += transaction.amount
      }else {
        incomeCategory[transaction.category] = transaction.amount;
      }
    }
  });

  return { totalExpenses, totalIncome, expenseCategory, incomeCategory };
  }

  const { totalExpenses, totalIncome, expenseCategory,  incomeCategory} = calculateTotalExpensesAndIncome(filterData);


const randomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
}

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


const options = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
  },
};

const cardsData = [
  {id: "1", title: "Total Income", amount: totalIncome, className:"pink"},
  {id: "2", title: "Total Expenses", amount: totalExpenses, className:"green"},
  {id: "3", title: "Total Income", amount: totalIncome - totalExpenses, className:"purple"}
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
