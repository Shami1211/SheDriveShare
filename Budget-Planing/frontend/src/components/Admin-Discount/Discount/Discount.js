import React from 'react';

const Discount = (props) => {
  const { _id, name, company, price, discount, total, start, end } = props.drive; // Change props.discount to props.drive

  return (
    <div>
      <h2>{name}</h2>
      <h4>Company: {company}</h4>
      <h4>Price: ${price}</h4>
      <h4>Discount: {discount}%</h4>
      <h4>Total: ${total}</h4>
      <h4>Start Date: {start}</h4>
      <h4>End Date: {end}</h4>
    </div>
  );
};

export default Discount;
