import React, { useState, useEffect } from 'react';
import './history.css';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal';
import Table from '../../components/Table';

const History = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const financeData = useSelector((state) => state.expenses);

  const handleAddExpense = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="add-expense">
        <button className="add-expense-btn" onClick={handleAddExpense}>
          ADD NEW
        </button>
      </div>
      <Table financeData={financeData} />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default History;
