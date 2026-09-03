import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Warranty & Bill Vault</h2>

      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/products">Products</NavLink>
        <NavLink to="/dashboard/profile">Profile</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;