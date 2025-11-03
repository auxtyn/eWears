import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <section className="container">
      <div>
        <div className="bg-warning">
          <h4 className=" text-white">erkrvnun</h4>
          <h4 className=" text-white">erkrvnun</h4>
          <h4 className=" text-white">erkrvnun</h4>
        </div>
        <aside>
          <ul className="p-0">
            <li className="border border-warning p-1 text-white">
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
            <li className="border border-warning p-1 text-white">
              <NavLink to="/admin">Home</NavLink>
            </li>
            <li className="border border-warning p-1 text-white">
              <NavLink to="/admin/view-products">All products</NavLink>
            </li>{" "}
            <li className="border border-warning p-1 text-white">
              <NavLink to="/admin/add-products">Add products</NavLink>
            </li>{" "}
            <li className="border border-warning p-1 text-white">
              <NavLink to="/admin/orders">Orders</NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default navbar;
