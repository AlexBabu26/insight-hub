import { useState, useMemo, useEffect } from "react";
import { fetchCompanies, type CompanyRecord } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, ArrowUp, ArrowDown, Search, Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SortDir = "asc" | "desc" | null;
type SortState = { key: keyof CompanyRecord; dir: SortDir };

const PAGE_SIZES = [25, 50, 100];

const STATUS_COLORS: Record<string, string> = {
  active: "bg-success/15 text-success border-success/30",
  inactive: "bg-muted text-muted-foreground border-border",
  pending: "bg-warning/15 text-warning border-warning/30",
  blocked: "bg-destructive/15 text-destructive border-destructive/30",
};

export default function Records() {
  const [companies, setCompanies] = useState<CompanyRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sort, setSort] = useState<SortState>({ key: "id", dir: "desc" });
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchCompanies(1000);
        setCompanies(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Unique statuses from data
  const statuses = useMemo(() => {
    const set = new Set(companies.map((c) => c.status || "unknown"));
    return Array.from(set).sort();
  }, [companies]);

  const activeFilters = [
    statusFilter !== "all" && { label: `Status: ${statusFilter}`, clear: () => setStatusFilter("all") },
    search && { label: `Search: "${search}"`, clear: () => setSearch("") },
  ].filter(Boolean) as { label: string; clear: () => void }[];

  const filtered = useMemo(() => {
    let data = [...companies];
    if (search) {
      const q = search.toLowerCase();
      data = data.filter((r) =>
        String(r.id).includes(q) ||
        (r.name?.toLowerCase().includes(q)) ||
        (r.email1?.toLowerCase().includes(q)) ||
        (r.website1?.toLowerCase().includes(q))
      );
    }
    if (statusFilter !== "all") data = data.filter((r) => (r.status || "unknown") === statusFilter);
    if (sort.dir) {
      data.sort((a, b) => {
        const av = a[sort.key];
        const bv = b[sort.key];
        if (av == null && bv == null) return 0;
        if (av == null) return 1;
        if (bv == null) return -1;
        if (typeof av === "number" && typeof bv === "number") return sort.dir === "asc" ? av - bv : bv - av;
        return sort.dir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
      });
    }
    return data;
  }, [companies, search, statusFilter, sort]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice(page * pageSize, (page + 1) * pageSize);

  function toggleSort(key: keyof CompanyRecord) {
    setSort((prev) => {
      if (prev.key !== key) return { key, dir: "asc" };
      if (prev.dir === "asc") return { key, dir: "desc" };
      return { key, dir: null };
    });
  }

  function SortIcon({ col }: { col: keyof CompanyRecord }) {
    if (sort.key !== col || !sort.dir) return <ArrowUpDown className="h-3 w-3 opacity-30" />;
    return sort.dir === "asc" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />;
  }

  function toggleSelect(id: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === paged.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(paged.map((r) => r.id)));
    }
  }

  function exportCSV() {
    const headers = ["id", "name", "status", "email1", "website1", "phone1", "created_at"];
    const rows = filtered.map((r) => headers.map((h) => String((r as any)[h] ?? "")).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "companies-export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-sm text-destructive">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold">Companies</h1>
        <Button variant="outline" size="sm" className="h-7 gap-1 text-xs" onClick={exportCSV}>
          <Download className="h-3 w-3" /> Export
        </Button>
      </div>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search companies…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            className="h-7 w-52 pl-7 text-xs"
          />
        </div>
        <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(0); }}>
          <SelectTrigger className="h-7 w-28 text-xs"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            {statuses.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Active filter chips */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-1">
          {activeFilters.map((f) => (
            <Badge key={f.label} variant="secondary" className="gap-1 text-2xs cursor-pointer" onClick={f.clear}>
              {f.label} <X className="h-2.5 w-2.5" />
            </Badge>
          ))}
          <button className="text-2xs text-muted-foreground hover:text-foreground" onClick={() => { setSearch(""); setStatusFilter("all"); }}>
            Clear all
          </button>
        </div>
      )}

      {/* Bulk actions */}
      {selected.size > 0 && (
        <div className="flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/5 px-3 py-1.5">
          <span className="text-xs font-medium">{selected.size} selected</span>
          <Button variant="outline" size="sm" className="h-6 text-2xs" onClick={exportCSV}>Export Selected</Button>
          <Button variant="ghost" size="sm" className="h-6 text-2xs" onClick={() => setSelected(new Set())}>Clear</Button>
        </div>
      )}

      {/* Table */}
      <div className="rounded-sm border border-border">
        {loading ? (
          <div className="space-y-2 p-4">
            {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-8 px-2">
                  <Checkbox checked={paged.length > 0 && selected.size === paged.length} onCheckedChange={toggleAll} />
                </TableHead>
                {[
                  { key: "id" as const, label: "ID", w: "w-20" },
                  { key: "name" as const, label: "Name", w: "min-w-[200px]" },
                  { key: "status" as const, label: "Status", w: "w-24" },
                  { key: "email1" as const, label: "Email", w: "w-48" },
                  { key: "website1" as const, label: "Website", w: "w-40" },
                  { key: "created_at" as const, label: "Created", w: "w-28" },
                ].map((col) => (
                  <TableHead
                    key={col.key}
                    className={cn("h-8 px-2 text-2xs cursor-pointer select-none", col.w)}
                    onClick={() => toggleSort(col.key)}
                  >
                    <div className="flex items-center gap-1">
                      {col.label}
                      <SortIcon col={col.key} />
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paged.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-xs text-muted-foreground">
                    No companies found.{" "}
                    {activeFilters.length > 0 && (
                      <button className="text-primary underline" onClick={() => { setSearch(""); setStatusFilter("all"); }}>
                        Clear filters
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ) : (
                paged.map((r) => (
                  <TableRow key={r.id} className="h-8" data-state={selected.has(r.id) ? "selected" : undefined}>
                    <TableCell className="px-2">
                      <Checkbox checked={selected.has(r.id)} onCheckedChange={() => toggleSelect(r.id)} />
                    </TableCell>
                    <TableCell className="px-2 text-2xs font-mono">{r.id}</TableCell>
                    <TableCell className="px-2 text-xs font-medium">{r.name || "—"}</TableCell>
                    <TableCell className="px-2">
                      <Badge variant="outline" className={cn("text-2xs", STATUS_COLORS[r.status?.toLowerCase() || ""] || "bg-secondary text-secondary-foreground border-border")}>
                        {r.status || "unknown"}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-2 text-2xs truncate max-w-[200px]">{r.email1 || "—"}</TableCell>
                    <TableCell className="px-2 text-2xs truncate max-w-[160px]">{r.website1 || "—"}</TableCell>
                    <TableCell className="px-2 text-2xs text-muted-foreground">{r.created_at?.substring(0, 10) || "—"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <span className="text-2xs text-muted-foreground">
          {filtered.length} companies · Page {page + 1} of {Math.max(totalPages, 1)}
        </span>
        <div className="flex items-center gap-2">
          <Select value={String(pageSize)} onValueChange={(v) => { setPageSize(Number(v)); setPage(0); }}>
            <SelectTrigger className="h-6 w-16 text-2xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              {PAGE_SIZES.map((s) => (
                <SelectItem key={s} value={String(s)}>{s}/page</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="h-6 w-6 p-0" disabled={page === 0} onClick={() => setPage(page - 1)}>
            <ChevronLeft className="h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="h-6 w-6 p-0" disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
