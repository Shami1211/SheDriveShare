// BudgetHome.js
import React from 'react';
import { Link } from 'react-router-dom';

const DirveShareHome = () => {
  return (
    <div>
      <h2>Welcome to SHE-DiscountDeals</h2>
      <div>
        <Link to="/adddiscount">
          <button>Add New Discount</button>
        </Link>
      </div>
      <div>
        <Link to="/discountss">
          <button>View All Discounts</button>
        </Link>
      </div>
    </div>
  );
};

export default DirveShareHome;
