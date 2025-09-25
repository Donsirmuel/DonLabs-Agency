export default function RequireAuth({ children }: { children: JSX.Element }) {
  // Admin auth removed per user request. Just render children.
  return children;
}
