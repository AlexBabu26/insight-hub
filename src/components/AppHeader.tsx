import { CalendarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router-dom";

const routeLabels: { [key: string]: string } = {
  "/": "Dashboard",
  "/records": "Records",
  "/admin": "Admin",
};

export function AppHeader() {
  const location = useLocation();
  const currentLabel = routeLabels[location.pathname] || "Page";

  return (
    <header className="flex h-10 items-center justify-between border-b border-border bg-card px-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="text-xs">Console</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xs">{currentLabel}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search…"
            className="h-7 w-48 pl-7 text-xs bg-background"
          />
        </div>
        <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
          <CalendarIcon className="h-3 w-3" />
          Last 30 days
        </Button>
      </div>
    </header>
  );
}
