// Supabase data service layer for Analytics & Operations Console
import { supabase } from "@/integrations/supabase/client";

// ============ Types ============

export interface CompanyRecord {
  id: number;
  name: string | null;
  status: string | null;
  email1: string | null;
  website1: string | null;
  phone1: string | null;
  country_id: number | null;
  city_id: number | null;
  companytype_id: number | null;
  is_internal_company: boolean | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface ContactRecord {
  id: number;
  first_name: string | null;
  last_name: string | null;
  title: string | null;
  email1: string | null;
  phone1: string | null;
  company_id: number | null;
  status: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface UserRecord {
  id: string;
  auth_user_id: string | null;
  username: string | null;
  status: string | null;
  role_id: number | null;
  company_id: number | null;
  department_id: number | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface ReviewRun {
  id: number;
  company_id: number;
  status: string;
  mode: string;
  review_scope: string;
  period_start: string;
  period_end: string;
  engagement_outcome: string | null;
  execution_time_ms: number | null;
  tool_calls_count: number | null;
  created_at: string | null;
  completed_at: string | null;
  error_message: string | null;
}

// ============ Fetch functions ============

export async function fetchCompanies(limit = 500) {
  const { data, error } = await supabase
    .from("companies")
    .select("id, name, status, email1, website1, phone1, country_id, city_id, companytype_id, is_internal_company, created_at, updated_at")
    .order("id", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as CompanyRecord[];
}

export async function fetchContacts(limit = 500) {
  const { data, error } = await supabase
    .from("contacts")
    .select("id, first_name, last_name, title, email1, phone1, company_id, status, created_at, updated_at")
    .order("id", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as ContactRecord[];
}

export async function fetchUsers() {
  const { data, error } = await supabase
    .from("users")
    .select("id, auth_user_id, username, status, role_id, company_id, department_id, created_at, updated_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as UserRecord[];
}

export async function fetchReviewRuns(limit = 500) {
  const { data, error } = await supabase
    .from("account_review_runs")
    .select("id, company_id, status, mode, review_scope, period_start, period_end, engagement_outcome, execution_time_ms, tool_calls_count, created_at, completed_at, error_message")
    .order("id", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as ReviewRun[];
}

// ============ Dashboard aggregation helpers ============

export function getCompanyKPIs(companies: CompanyRecord[]) {
  const total = companies.length;
  const active = companies.filter((c) => c.status?.toLowerCase() === "active").length;
  const internal = companies.filter((c) => c.is_internal_company).length;
  const withEmail = companies.filter((c) => c.email1).length;
  return { total, active, internal, withEmail };
}

export function getStatusDistribution(companies: CompanyRecord[]) {
  const counts: Record<string, number> = {};
  for (const c of companies) {
    const s = c.status || "unknown";
    counts[s] = (counts[s] || 0) + 1;
  }
  return Object.entries(counts).map(([name, value]) => ({ name, value }));
}

export function getMonthlyTrend(companies: CompanyRecord[]) {
  const months: Record<string, number> = {};
  for (const c of companies) {
    if (c.created_at) {
      const month = c.created_at.substring(0, 7);
      months[month] = (months[month] || 0) + 1;
    }
  }
  return Object.entries(months)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-12)
    .map(([month, count]) => ({ month, count }));
}

export function getContactsByCompany(contacts: ContactRecord[]) {
  const counts: Record<string, number> = {};
  for (const c of contacts) {
    const key = c.company_id ? `Company ${c.company_id}` : "Unassigned";
    counts[key] = (counts[key] || 0) + 1;
  }
  return Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }));
}
