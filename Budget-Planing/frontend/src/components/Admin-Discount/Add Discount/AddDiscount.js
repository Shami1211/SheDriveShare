import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDiscount = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    image: '',
    name: '',
    company: '',
    price: 0,
    discount: 0,
    total: 0,
    start: '',
    end: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    const { price, discount } = inputs;
    const priceValue = parseFloat(price);
    const discountValue = parseFloat(discount);
    if (!isNaN(priceValue) && !isNaN(discountValue)) {
      const discountAmount = (priceValue * discountValue) / 100;
      const total = priceValue - discountAmount;
      setInputs((prevState) => ({
        ...prevState,
        total: total.toFixed(2), // Round to 2 decimal places
      }));
    }
  };

  useEffect(() => {
    calculateTotal(); // Calculate total whenever price or discount changes
  }, [inputs.price, inputs.discount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/discounts/', inputs);
      navigate('/discounts');
    } catch (error) {
      console.error('Error submitting discount:', error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <div>
      <h2>Add Discount</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image:</label>
          <input type="text" name="image" value={inputs.image} onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={inputs.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Company:</label>
          <input type="text" name="company" value={inputs.company} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={inputs.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Discount (%):</label>
          <input type="number" name="discount" value={inputs.discount} onChange={handleChange} required />
        </div>
        <div>
          <label>Total:</label>
          <input type="text" name="total" value={inputs.total} readOnly />
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" name="start" value={inputs.start} onChange={handleChange} required />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" name="end" value={inputs.end} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDiscount;
