import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { users } from "@/lib/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ROLE_COLORS: Record<string, string> = {
  admin: "bg-destructive/15 text-destructive border-destructive/30",
  manager: "bg-warning/15 text-warning border-warning/30",
  analyst: "bg-info/15 text-info border-info/30",
};

export default function Admin() {
  return (
    <div className="space-y-3">
      <h1 className="text-sm font-semibold">Admin</h1>

      <Card>
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-xs font-semibold">Users & Roles</CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-2">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="h-8 text-2xs">ID</TableHead>
                <TableHead className="h-8 text-2xs">Name</TableHead>
                <TableHead className="h-8 text-2xs">Email</TableHead>
                <TableHead className="h-8 text-2xs">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.id} className="h-8">
                  <TableCell className="text-2xs font-mono">{u.id}</TableCell>
                  <TableCell className="text-xs">{u.name}</TableCell>
                  <TableCell className="text-2xs text-muted-foreground">{u.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-2xs ${ROLE_COLORS[u.role]}`}>
                      {u.role}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
