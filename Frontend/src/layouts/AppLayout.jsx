import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AppLayout() {
  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
  return (
    <div className="app-layout">
      <Sidebar />
      
      <div className="app-content">
        <Navbar />

        <main>
          <Outlet />

          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              margin: "20px",
              cursor: "pointer",
            }}
          >
            Logout
        </button>

        </main>
      </div>
    </div>
  );
}

export default AppLayout;