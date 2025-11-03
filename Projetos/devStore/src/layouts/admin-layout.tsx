import { Link, Outlet } from "react-router";

export const AdminLayout = () => (
  <div className="min-h-svh">
    <nav>
      <ul>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/settings"}>Configuracoes</Link>
        </li>
      </ul>
    </nav>
    <h1>Header - AdminLayout</h1>
    <Outlet />
  </div>
);
