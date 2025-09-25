import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getJSON, patchJSON } from '@/lib/api';
import { Button } from '@/components/ui/button';

const fetchOrders = async (): Promise<any[]> => getJSON('/orders/');

const Orders = () => {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery<any[]>({ queryKey: ['orders'], queryFn: fetchOrders });

  const update = useMutation<any, Error, { id: number; body: any }>({
    mutationFn: ({ id, body }) => patchJSON(`/orders/${id}/`, body),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['orders'] })
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {isLoading ? <p>Loading…</p> : (
        <div className="space-y-3">
          {Array.isArray(data) && data.length > 0 ? data.map((o: any) => (
            <div key={o.id} className="p-3 bg-muted rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">Order #{o.id}</div>
                  <div className="text-sm text-muted-foreground">Total: ₦{(o.total_kobo/100).toLocaleString()}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">{o.status}</div>
                  <Button size="sm" onClick={() => update.mutate({ id: o.id, body: { status: 'shipped' } })}>Mark shipped</Button>
                </div>
              </div>
            </div>
          )) : <p className="text-muted-foreground">No orders yet.</p>}
        </div>
      )}
    </div>
  );
};

export default Orders;
