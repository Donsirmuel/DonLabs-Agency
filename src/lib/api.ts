export const API_BASE = '/api';

export async function getJSON(path: string, opts: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
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
