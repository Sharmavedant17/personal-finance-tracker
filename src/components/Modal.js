import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNew } from '../redux/actions/finances';
import {categoryData} from '../utils/data'

const Modal = ({ setIsModalOpen }) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
//   const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

//   const handleEnable = () => {
//             if (amount && type && category && date && description) {
//                 setDisable(false)
//             }else {
//                 setDisable(true)
//             }

//   }

  const clearFinanceFormData = () => {
    setAmount('');
    setType('');
    setCategory('');
    setDate('');
    setDescription('');
  };

  const handleCloseModal = () => {
    clearFinanceFormData();
    setIsModalOpen(false);
  };

  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    if (parseFloat(inputAmount) > 0 || inputAmount === '') {
      setAmount(inputAmount);
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      const newFinance = {
        date,
        type,
        description,
        category,
        amount: parseFloat(amount),
        userName: localStorage.getItem("username")
      };

      dispatch(addNew(newFinance));
      clearFinanceFormData();
      setIsModalOpen(false);
    
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={handleCloseModal}>
          X
        </button>
        <div className="form-heading">
          <h2>Add Expense or Income</h2>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter Amount"
            min="0"
          />
          <br />

          <label>Type:</label>
          <select id="type" value={type} onChange={handleTypeChange}>
            <option value="" disabled>
              Select Type
            </option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <br />

          <label>Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select Category
            </option>
            {
                categoryData.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })
            }
            
          </select>
          <br />

          <label>Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
          <br />

          <label>Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter Description"
          />
          <br />

          <button
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
            //  disabled={disable}
          >
            Submit
          </button>
          <div className="disclaimer">* All the fields are mandatory</div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
