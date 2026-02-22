import { useEffect, useState } from "react";
import { ArrowUpRight, Activity, Building2, Users, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchCompanies, fetchContacts,
  getCompanyKPIs, getStatusDistribution, getMonthlyTrend, getContactsByCompany,
  type CompanyRecord, type ContactRecord,
} from "@/lib/mock-data";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const CHART_COLORS = [
  "hsl(220, 72%, 50%)",
  "hsl(152, 60%, 40%)",
  "hsl(38, 92%, 50%)",
  "hsl(280, 60%, 55%)",
  "hsl(0, 72%, 51%)",
];

function KPICard({ title, value, icon: Icon, loading }: {
  title: string; value: string; icon: React.ElementType; loading?: boolean;
}) {
  return (
    <Card className="p-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{title}</span>
        <Icon className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      {loading ? (
        <Skeleton className="mt-1 h-6 w-20" />
      ) : (
        <div className="mt-1 text-xl font-bold tracking-tight">{value}</div>
      )}
    </Card>
  );
}

export default function Dashboard() {
  const [companies, setCompanies] = useState<CompanyRecord[]>([]);
  const [contacts, setContacts] = useState<ContactRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [c, ct] = await Promise.all([fetchCompanies(), fetchContacts()]);
        setCompanies(c);
        setContacts(ct);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const kpis = getCompanyKPIs(companies);
  const statusDist = getStatusDistribution(companies);
  const trendData = getMonthlyTrend(companies);
  const contactsByCompany = getContactsByCompany(contacts);

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-sm text-destructive">Error loading data: {error}</p>
      </div>
    );
  }

  const isEmpty = !loading && companies.length === 0 && contacts.length === 0;

  return (
    <div className="space-y-3">
      <h1 className="text-sm font-semibold">Dashboard</h1>

      {/* KPI Row */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <KPICard title="Total Companies" value={kpis.total.toLocaleString()} icon={Building2} loading={loading} />
        <KPICard title="Active" value={kpis.active.toLocaleString()} icon={Activity} loading={loading} />
        <KPICard title="With Email" value={kpis.withEmail.toLocaleString()} icon={Mail} loading={loading} />
        <KPICard title="Contacts" value={contacts.length.toLocaleString()} icon={Users} loading={loading} />
      </div>

      {isEmpty && (
        <Card className="p-8 text-center">
          <p className="text-sm text-muted-foreground">No data found. Add companies and contacts to your Supabase database to see charts and metrics here.</p>
        </Card>
      )}

      {!isEmpty && (
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {/* Monthly Trend */}
          <Card>
            <CardHeader className="p-3 pb-0">
              <CardTitle className="text-xs font-semibold">Companies Created (Monthly)</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-2">
              {loading ? <Skeleton className="h-[220px]" /> : trendData.length === 0 ? (
                <p className="flex items-center justify-center h-[220px] text-xs text-muted-foreground">No trend data</p>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 88%)" />
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                    <YAxis tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                    <Tooltip contentStyle={{ fontSize: 11 }} />
                    <Line type="monotone" dataKey="count" stroke={CHART_COLORS[0]} strokeWidth={2} dot={false} name="Companies" />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Contacts by Company */}
          <Card>
            <CardHeader className="p-3 pb-0">
              <CardTitle className="text-xs font-semibold">Top Companies by Contacts</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-2">
              {loading ? <Skeleton className="h-[220px]" /> : contactsByCompany.length === 0 ? (
                <p className="flex items-center justify-center h-[220px] text-xs text-muted-foreground">No contact data</p>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={contactsByCompany}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 88%)" />
                    <XAxis dataKey="name" tick={{ fontSize: 9 }} stroke="hsl(220, 10%, 46%)" />
                    <YAxis tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                    <Tooltip contentStyle={{ fontSize: 11 }} />
                    <Bar dataKey="value" fill={CHART_COLORS[0]} radius={[2, 2, 0, 0]} name="Contacts" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Status Distribution */}
          <Card>
            <CardHeader className="p-3 pb-0">
              <CardTitle className="text-xs font-semibold">Company Status Distribution</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-2">
              {loading ? <Skeleton className="h-[220px]" /> : statusDist.length === 0 ? (
                <p className="flex items-center justify-center h-[220px] text-xs text-muted-foreground">No status data</p>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={statusDist} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={40} paddingAngle={2}>
                      {statusDist.map((_, i) => (
                        <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ fontSize: 11 }} />
                    <Legend wrapperStyle={{ fontSize: 10 }} />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Contacts Status */}
          <Card>
            <CardHeader className="p-3 pb-0">
              <CardTitle className="text-xs font-semibold">Contact Status Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-2">
              {loading ? <Skeleton className="h-[220px]" /> : contacts.length === 0 ? (
                <p className="flex items-center justify-center h-[220px] text-xs text-muted-foreground">No contact data</p>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart
                    data={(() => {
                      const counts: Record<string, number> = {};
                      for (const c of contacts) {
                        const s = c.status || "unknown";
                        counts[s] = (counts[s] || 0) + 1;
                      }
                      return Object.entries(counts).map(([name, value]) => ({ name, value }));
                    })()}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 88%)" />
                    <XAxis type="number" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" width={70} />
                    <Tooltip contentStyle={{ fontSize: 11 }} />
                    <Bar dataKey="value" fill={CHART_COLORS[3]} radius={[0, 2, 2, 0]} name="Count" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
