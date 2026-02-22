// Mock data layer for Analytics & Operations Console

export type RecordStatus = "active" | "pending" | "closed" | "flagged" | "archived";
export type RecordCategory = "sales" | "support" | "engineering" | "marketing" | "operations";
export type Region = "NA" | "EMEA" | "APAC" | "LATAM";
export type UserRole = "admin" | "manager" | "analyst";

export interface Record {
  id: string;
  name: string;
  status: RecordStatus;
  category: RecordCategory;
  region: Region;
  amount: number;
  createdAt: string;
  updatedAt: string;
  owner: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface AuditEvent {
  id: string;
  recordId: string;
  field: string;
  oldValue: string;
  newValue: string;
  changedBy: string;
  timestamp: string;
}

const statuses: RecordStatus[] = ["active", "pending", "closed", "flagged", "archived"];
const categories: RecordCategory[] = ["sales", "support", "engineering", "marketing", "operations"];
const regions: Region[] = ["NA", "EMEA", "APAC", "LATAM"];

const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Iris", "Jack", "Karen", "Leo", "Mia", "Nate", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tina"];
const lastNames = ["Chen", "Kumar", "Müller", "Garcia", "Tanaka", "Smith", "Johnson", "Williams", "Brown", "Jones", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
const projectNames = ["Project Alpha", "Operation Zenith", "Task Omega", "Initiative Delta", "Sprint Echo", "Campaign Foxtrot", "Batch Gamma", "Workflow Sigma", "Pipeline Bravo", "Module Kilo"];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

const rand = seededRandom(42);

function pick<T>(arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

function randomDate(start: Date, end: Date): string {
  const d = new Date(start.getTime() + rand() * (end.getTime() - start.getTime()));
  return d.toISOString();
}

export const users: User[] = Array.from({ length: 12 }, (_, i) => ({
  id: `usr-${String(i + 1).padStart(3, "0")}`,
  name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
  email: `${firstNames[i % firstNames.length].toLowerCase()}.${lastNames[i % lastNames.length].toLowerCase()}@acme.io`,
  role: (["admin", "manager", "analyst", "analyst", "analyst", "manager"] as UserRole[])[i % 6],
  avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${firstNames[i % firstNames.length]}${lastNames[i % lastNames.length]}`,
}));

export const records: Record[] = Array.from({ length: 200 }, (_, i) => {
  const createdAt = randomDate(new Date("2024-01-01"), new Date("2026-02-20"));
  const updatedAt = randomDate(new Date(createdAt), new Date("2026-02-22"));
  return {
    id: `REC-${String(i + 1).padStart(4, "0")}`,
    name: `${pick(projectNames)} #${Math.floor(rand() * 9000 + 1000)}`,
    status: pick(statuses),
    category: pick(categories),
    region: pick(regions),
    amount: Math.round(rand() * 150000 * 100) / 100,
    createdAt,
    updatedAt,
    owner: pick(users).name,
  };
});

const auditFields = ["status", "amount", "category", "owner", "name"];
export const auditEvents: AuditEvent[] = Array.from({ length: 80 }, (_, i) => {
  const record = pick(records);
  const field = pick(auditFields);
  return {
    id: `aud-${String(i + 1).padStart(3, "0")}`,
    recordId: record.id,
    field,
    oldValue: field === "amount" ? String(Math.round(rand() * 50000)) : pick(statuses),
    newValue: field === "amount" ? String(Math.round(rand() * 50000)) : pick(statuses),
    changedBy: pick(users).name,
    timestamp: randomDate(new Date("2025-01-01"), new Date("2026-02-22")),
  };
});

// Dashboard aggregation helpers
export function getKPIs() {
  const total = records.length;
  const active = records.filter((r) => r.status === "active").length;
  const totalAmount = records.reduce((s, r) => s + r.amount, 0);
  const avgAmount = totalAmount / total;
  const flagged = records.filter((r) => r.status === "flagged").length;
  return {
    totalRecords: total,
    activeRecords: active,
    totalAmount,
    avgAmount,
    flaggedRecords: flagged,
    changePercent: 12.4, // mock
  };
}

export function getStatusDistribution() {
  const counts: { [key: string]: number } = {};
  for (const r of records) {
    counts[r.status] = (counts[r.status] || 0) + 1;
  }
  return Object.entries(counts).map(([name, value]) => ({ name, value }));
}

export function getCategoryBreakdown() {
  const counts: { [key: string]: number } = {};
  for (const r of records) {
    counts[r.category] = (counts[r.category] || 0) + 1;
  }
  return Object.entries(counts).map(([name, value]) => ({ name, value }));
}

export function getRegionAmounts() {
  const sums: { [key: string]: number } = {};
  for (const r of records) {
    sums[r.region] = (sums[r.region] || 0) + r.amount;
  }
  return Object.entries(sums).map(([name, value]) => ({ name, value: Math.round(value) }));
}

export function getMonthlyTrend() {
  const months: { [key: string]: { count: number; amount: number } } = {};
  for (const r of records) {
    const month = r.createdAt.substring(0, 7);
    if (!months[month]) months[month] = { count: 0, amount: 0 };
    months[month].count++;
    months[month].amount += r.amount;
  }
  return Object.entries(months)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, data]) => ({ month, ...data, amount: Math.round(data.amount) }));
}
