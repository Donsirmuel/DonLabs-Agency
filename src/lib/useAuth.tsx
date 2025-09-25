export function useAuth() {
  // Admin auth removed per user request.
  return { access: null, refresh: null, login: async () => false, logout: () => {}, isAuthenticated: false } as const;
}
