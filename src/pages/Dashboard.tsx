import { ArrowUpRight, ArrowDownRight, Activity, DollarSign, AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getKPIs, getStatusDistribution, getCategoryBreakdown, getRegionAmounts, getMonthlyTrend } from "@/lib/mock-data";
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

function KPICard({ title, value, change, icon: Icon, trend }: {
  title: string; value: string; change: string; icon: React.ElementType; trend: "up" | "down";
}) {
  return (
    <Card className="p-3">
      <div className="flex items-center justify-between">
        <span className="text-xs-dense text-muted-foreground">{title}</span>
        <Icon className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <div className="mt-1 text-xl font-bold tracking-tight">{value}</div>
      <div className={`mt-0.5 flex items-center gap-0.5 text-2xs ${trend === "up" ? "text-success" : "text-destructive"}`}>
        {trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
        {change}
      </div>
    </Card>
  );
}

export default function Dashboard() {
  const kpis = getKPIs();
  const statusDist = getStatusDistribution();
  const categoryData = getCategoryBreakdown();
  const regionData = getRegionAmounts();
  const trendData = getMonthlyTrend();

  return (
    <div className="space-y-3">
      <h1 className="text-sm font-semibold">Dashboard</h1>

      {/* KPI Row */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <KPICard title="Total Records" value={kpis.totalRecords.toLocaleString()} change="+12.4% vs prev" icon={FileText} trend="up" />
        <KPICard title="Active" value={kpis.activeRecords.toLocaleString()} change="+8.1% vs prev" icon={Activity} trend="up" />
        <KPICard title="Total Amount" value={`$${(kpis.totalAmount / 1000).toFixed(0)}K`} change="+15.3% vs prev" icon={DollarSign} trend="up" />
        <KPICard title="Flagged" value={kpis.flaggedRecords.toLocaleString()} change="-3.2% vs prev" icon={AlertTriangle} trend="down" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {/* Monthly Trend */}
        <Card>
          <CardHeader className="p-3 pb-0">
            <CardTitle className="text-xs font-semibold">Monthly Trend</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-2">
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 88%)" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="count" stroke={CHART_COLORS[0]} strokeWidth={2} dot={false} name="Count" />
                <Line type="monotone" dataKey="amount" stroke={CHART_COLORS[1]} strokeWidth={2} dot={false} name="Amount" yAxisId={0} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Region Amounts */}
        <Card>
          <CardHeader className="p-3 pb-0">
            <CardTitle className="text-xs font-semibold">Amount by Region</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-2">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={regionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="value" fill={CHART_COLORS[0]} radius={[2, 2, 0, 0]} name="Amount" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Status Distribution */}
        <Card>
          <CardHeader className="p-3 pb-0">
            <CardTitle className="text-xs font-semibold">Status Distribution</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-2">
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
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <CardHeader className="p-3 pb-0">
            <CardTitle className="text-xs font-semibold">Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-2">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 88%)" />
                <XAxis type="number" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 46%)" width={70} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="value" fill={CHART_COLORS[3]} radius={[0, 2, 2, 0]} name="Count" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
