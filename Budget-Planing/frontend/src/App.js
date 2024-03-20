// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BudgetHome from './components/Budget-Planning/Budget/BudgetHome';
import AddBudget from './components/Budget-Planning/Add Budget/AddBudget';
import Budgets from './components/Budget-Planning/Budget/Budgets';
import PostHome from './components/Add-Post/Post/PostHome';
import AddPost from './components/Add-Post/Add Post/AddPost';
import Posts from './components/Add-Post/Post/Posts';
import DriveShare from './components/Add-Drive/Drive/DirveShareHome';
import AddDrive from './components/Add-Drive/Add Drive/AddDrive';
import MyDrives from './components/Add-Drive/Drive/Drives';
import AddDiscount from './components/Admin-Discount/Add Discount/AddDiscount';
import Discounts from './components/Admin-Discount/Discount/Discounts';
import DisHome from './components/Admin-Discount/Discount/DiscountDash';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* Budget Routes */}
          <Route exact path="/" element={<BudgetHome />} />
          <Route exact path="/addbudget" element={<AddBudget />} />
          <Route exact path="/budgets" element={<Budgets />} />

          {/* Post Routes */}
          <Route exact path="/postHome" element={<PostHome />} />
          <Route exact path="/addpost" element={<AddPost />} />
          <Route exact path="/posts" element={<Posts />} />

          {/* Drive Routes */}
          <Route exact path="/driveshare" element={<DriveShare />} />
          <Route exact path="/adddrive" element={<AddDrive />} />
          <Route exact path="/mydrives" element={<MyDrives />} />

          {/* Discount Routes */}
          <Route exact path="/dishome" element={<DisHome />} />
          <Route exact path="/adddiscount" element={<AddDiscount />} />
          <Route exact path="/discounts" element={<Discounts />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
