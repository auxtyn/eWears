import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  if (userEmail === "austinserver04@gmail.com") {
    return children;
  } else {
    return (
      <section className="my-5">
        <h1>Permission denied</h1>
        <p>This page can only be viewed by an admin</p>
        <Link to="/">
        <button className="btn btn-warning text-white">&larr; Go back home</button>
        </Link>
      </section>
    );
  }
};

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  if (userEmail === "austinserver04@gmail.com") {
    return  children;
  } else {
    return null;
  }
};

export default AdminOnlyRoute;
