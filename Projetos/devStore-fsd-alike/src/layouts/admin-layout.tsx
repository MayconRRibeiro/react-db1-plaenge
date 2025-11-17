import {
  Store,
  Users,
  LogOut,
  LayoutDashboard,
  Package,
  ShoppingCart,
  FileText,
  Settings,
} from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router";
import { Button } from "@/shared/ui/button";
import { useAuthContext } from "@/shared/context/auth.context";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/ui/sidebar";

const menuItems = [
  { id: "1", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { id: "2", label: "Produtos", icon: Package, path: "/products" },
  { id: "3", label: "Pedidos", icon: ShoppingCart, path: "/orders" },
  { id: "4", label: "Clientes", icon: Users, path: "/customers" },
  { id: "5", label: "Relatórios", icon: FileText, path: "/reports" },
  { id: "6", label: "Configurações", icon: Settings, path: "/settings" },
];

const AppSidebar = () => {
  const { user, logout } = useAuthContext();
  const location = useLocation();

  return (
    <Sidebar className="bg-slate-950 border-r-0">
      <SidebarHeader className="p-6 border-b border-white/10 bg-slate-950">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <Store className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg text-white">DevStore</h1>
            <p className="text-xs text-white/60">Admin Panel</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4 bg-slate-950">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`h-auto px-4 py-3 ${
                        isActive
                          ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <NavLink to={item.path}>
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-white/10 bg-slate-950">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate text-white">{user?.name}</p>
            <p className="text-xs text-white/60 truncate">{user?.email}</p>
          </div>
        </div>
        <Button
          onClick={logout}
          variant="outline"
          className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export const AdminLayout = () => {
  const location = useLocation();

  const currentMenuItem = menuItems.find(
    (item) => item.path === location.pathname
  );

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <header className="bg-white border-b px-8 py-4 flex items-center gap-4">
          <SidebarTrigger />
          <h2 className="text-2xl text-neutral-950">
            {currentMenuItem?.label || "Dashboard"}
          </h2>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};
