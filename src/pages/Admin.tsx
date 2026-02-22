import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchUsers, type UserRecord } from "@/lib/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ROLE_COLORS: Record<string, string> = {
  "1": "bg-destructive/15 text-destructive border-destructive/30",
  "2": "bg-warning/15 text-warning border-warning/30",
  "3": "bg-info/15 text-info border-info/30",
};

export default function Admin() {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-sm text-destructive">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h1 className="text-sm font-semibold">Admin</h1>

      <Card>
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-xs font-semibold">Users ({loading ? "…" : users.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-2">
          {loading ? (
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}
            </div>
          ) : users.length === 0 ? (
            <p className="py-8 text-center text-xs text-muted-foreground">No users found in the database.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="h-8 text-2xs">Username</TableHead>
                  <TableHead className="h-8 text-2xs">Status</TableHead>
                  <TableHead className="h-8 text-2xs">Role ID</TableHead>
                  <TableHead className="h-8 text-2xs">Company ID</TableHead>
                  <TableHead className="h-8 text-2xs">Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((u) => (
                  <TableRow key={u.id} className="h-8">
                    <TableCell className="text-xs">{u.username || "—"}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-2xs ${u.status === "active" ? "bg-success/15 text-success border-success/30" : "bg-muted text-muted-foreground border-border"}`}>
                        {u.status || "unknown"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-2xs">
                      <Badge variant="outline" className={`text-2xs ${ROLE_COLORS[String(u.role_id)] || "bg-secondary text-secondary-foreground border-border"}`}>
                        {u.role_id ?? "—"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-2xs font-mono">{u.company_id ?? "—"}</TableCell>
                    <TableCell className="text-2xs text-muted-foreground">{u.created_at?.substring(0, 10) || "—"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
