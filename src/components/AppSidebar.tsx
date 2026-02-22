import { LayoutDashboard, Table2, Settings, ChevronLeft, ChevronRight, Activity } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Records", url: "/records", icon: Table2 },
  { title: "Admin", url: "/admin", icon: Settings },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-200",
        collapsed ? "w-14" : "w-52"
      )}
    >
      {/* Brand */}
      <div className="flex h-10 items-center border-b border-sidebar-border px-3">
        <Activity className="h-4 w-4 shrink-0 text-sidebar-primary" />
        {!collapsed && (
          <span className="ml-2 truncate text-xs font-bold tracking-wide text-sidebar-primary-foreground">
            OPS CONSOLE
          </span>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-0.5 p-1.5">
        {navItems.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            end={item.url === "/"}
            className={cn(
              "flex items-center gap-2 rounded-sm px-2.5 py-1.5 text-xs transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              collapsed && "justify-center px-0"
            )}
            activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
          >
            <item.icon className="h-3.5 w-3.5 shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex h-8 items-center justify-center border-t border-sidebar-border text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
      </button>
    </aside>
  );
}
