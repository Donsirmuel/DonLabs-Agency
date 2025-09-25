export const API_BASE = '/api';

export async function getJSON(path: string, opts: RequestInit = {}) {
  const access = typeof window !== 'undefined' ? localStorage.getItem('admin_access') : null;
  const defaultHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
  if (access) defaultHeaders['Authorization'] = `Bearer ${access}`;

  const mergedHeaders = { ...defaultHeaders, ...(opts.headers || {}) } as Record<string, string>;

  const res = await fetch(`${API_BASE}${path}`, {
    ...opts,
    headers: mergedHeaders,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export async function postJSON(path: string, body: any) {
  return getJSON(path, { method: 'POST', body: JSON.stringify(body) });
}

export async function patchJSON(path: string, body: any) {
  return getJSON(path, { method: 'PATCH', body: JSON.stringify(body) });
}
