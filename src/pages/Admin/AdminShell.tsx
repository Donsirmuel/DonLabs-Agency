import { Link, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Dashboard from '@/pages/Admin/admin/Dashboard';
import Products from '@/pages/Admin/admin/Products';
import Orders from '@/pages/Admin/admin/Orders';
import Users from '@/pages/Admin/admin/Users';

const AdminShell = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 bg-card p-4 rounded-lg">
          <div className="mb-6">
            <h3 className="text-lg font-bold">Admin</h3>
            <p className="text-sm text-muted-foreground">Dashboard & content</p>
          </div>
          <nav className="flex flex-col gap-2">
            <Link to="/admin" className="text-sm text-primary">Dashboard</Link>
            <Link to="products" className="text-sm">Products</Link>
            <Link to="orders" className="text-sm">Orders</Link>
            <Link to="users" className="text-sm">Users</Link>
          </nav>
          <div className="mt-6">
            <button className="text-sm text-muted-foreground" onClick={() => navigate('/')}>Return to site</button>
          </div>
        </aside>

        <main className="md:col-span-3 bg-card p-6 rounded-lg">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </Routes>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminShell;
