import { useQuery } from '@tanstack/react-query';
import { getJSON } from '@/lib/api';

const fetchUsers = async () => getJSON('/users/');

const Users = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers, retry: false as any });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      {isLoading && <p>Loading…</p>}
      {error && <p className="text-muted-foreground">No users endpoint found. Use Django Admin or add a users API (DRF) to manage users programmatically.</p>}
      {Array.isArray(data) && data.length > 0 && (
        <div className="space-y-3">
          {data.map((u: any) => (
            <div key={u.id} className="p-3 bg-muted rounded-md">
              <div className="font-semibold">{u.username}</div>
              <div className="text-sm text-muted-foreground">{u.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
