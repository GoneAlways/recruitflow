const API_BASE = "http://8.136.142.66/api";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<{ code: number; message: string; data: T }> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) || {}),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  return res.json();
}

export const api = {
  auth: {
    register: (data: { name: string; phone: string; password: string; email?: string }) =>
      request<{ token: string; user: any }>("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    login: (data: { phone: string; password: string }) =>
      request<{ token: string; user: any }>("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },

  jobs: {
    list: (params?: Record<string, string>) => {
      const qs = params ? "?" + new URLSearchParams(params).toString() : "";
      return request<{ items: any[]; total: number }>(`/jobs${qs}`);
    },
    detail: (id: number) => request<any>(`/jobs/${id}`),
    apply: (id: number) =>
      request<any>(`/jobs/${id}/apply`, { method: "POST" }),
  },

  applications: {
    list: (status?: string) => {
      const qs = status ? `?status=${status}` : "";
      return request<any[]>(`/applications${qs}`);
    },
  },

  user: {
    profile: () => request<any>("/user/profile"),
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
