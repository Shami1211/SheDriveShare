import React, { useEffect, useState } from "react";
import axios from "axios";
import Discount from "./Discount";

const API_URL = "http://localhost:5000/discounts";

const fetchDiscounts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.discounts; // Assuming the discounts are under the "discounts" property
  } catch (error) {
    console.error("Error fetching discounts:", error);
    return []; // Return an empty array in case of an error
  }
};

const Discounts = () => {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    fetchDiscounts().then((data) => setDiscounts(data));
  }, []);

  console.log(discounts);

  return (
    <div>
      <h1>Discounts</h1>
      <ul>
        {discounts.map((discount, index) => (
          <li key={index}>
            <Discount discount={discount} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discounts;
