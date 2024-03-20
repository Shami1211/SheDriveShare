import React, { useEffect, useState } from "react";
import axios from "axios";
import Discount from "./Discount";

const URL = "http://localhost:5000/discounts";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export default function Discounts() {
  const [discounts, setDiscounts] = useState([]);
  
  useEffect(() => {
    fetchHandler().then((data) => setDiscounts(data.discounts)); // Change data.drives to data.discounts
  }, []);

  console.log(discounts);

  return (
    <div>
      <ul>
        {discounts &&
          discounts.map((discount, i) => (
            <li key={i}>
              <Discount drive={discount} /> // Change props.discount to props.drive
            </li>
          ))}
      </ul>
    </div>
  );
}
