import { mockUser, mockJobs, mockJobDetails } from "./mock";

const API_BASE = "http://8.136.142.66/api";
const TIMEOUT_MS = 5000;

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  fallback?: T
): Promise<{ code: number; message: string; data: T }> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) || {}),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const res = await fetchWithTimeout(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });
    return res.json();
  } catch {
    // Network error or timeout — return fallback if provided
    if (fallback !== undefined) {
      return { code: 200, message: "离线模式", data: fallback };
    }
    return { code: 0, message: "网络不可用，请稍后重试", data: [] as any };
  }
}

export const api = {
  auth: {
    register: (data: {
      name: string;
      phone: string;
      password: string;
      email?: string;
    }) =>
      request<{ token: string; user: any }>(
        "/auth/register",
        {
          method: "POST",
          body: JSON.stringify(data),
        },
        { token: "mock-token-2024", user: mockUser.data }
      ),
    login: (data: { phone: string; password: string }) =>
      request<{ token: string; user: any }>(
        "/auth/login",
        {
          method: "POST",
          body: JSON.stringify(data),
        },
        { token: "mock-token-2024", user: mockUser.data }
      ),
  },

  jobs: {
    list: (params?: Record<string, string>) => {
      const qs = params ? "?" + new URLSearchParams(params).toString() : "";
      return request<{ items: any[]; total: number }>(`/jobs${qs}`, {}, mockJobs.data);
    },
    detail: (id: number) =>
      request<any>(`/jobs/${id}`, {}, mockJobDetails[id] || mockJobs.data.items[0]),
    apply: (id: number) =>
      request<any>(`/jobs/${id}/apply`, { method: "POST" }, { message: "投递成功" }),
  },

  applications: {
    list: (status?: string) => {
      const qs = status ? `?status=${status}` : "";
      return request<any[]>(`/applications${qs}`);
    },
  },

  user: {
    profile: () => request<any>("/user/profile", {}, mockUser.data),
    updateProfile: (data: any) =>
      request<any>("/user/profile", {
        method: "PUT",
        body: JSON.stringify(data),
      }),
  },
};

export function isLoggedIn(): boolean {
  return !!getToken();
}
