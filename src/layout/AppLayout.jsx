import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/user-list">Users</Link>
            </li>
            <li>
              <Link to="/post-list">Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
