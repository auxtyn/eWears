import { Route, Routes } from "react-router";
import Home from "../../components/admin/home";
import AddProducts from "../../components/admin/addProducts";
import Orders from "../../components/admin/orders";
import ViewProducts from "../../components/admin/viewProducts";
import Navbar from "../../components/admin/navbar";

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <div className="row">
        <div className="col-md-2">
          <Navbar />
        </div>
        <div className="col-md-10">
          {/* <p>Other contents</p>
          <p>Other contents</p>
          <p>Other contents</p>
          <p>Other contents</p> */}
        </div>
      </div>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="add-products" element={<AddProducts />} />
        <Route path="orders" element={<Orders />} />
        <Route path="view-products" element={<ViewProducts />} />
      </Routes>
    </div>
  );
};

export default Admin;
