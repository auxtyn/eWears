import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const adminEmail = useSelector(selectEmail);
  console.log(adminEmail);
  return (
    <div>
      <Link className="text-white navigation nav-link button">Admin</Link>
    </div>
  );
};

export default AdminOnlyRoute;
