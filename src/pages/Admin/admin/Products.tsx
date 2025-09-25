import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getJSON, postJSON } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const fetchProducts = async (): Promise<any[]> => {
  return getJSON('/products/');
};

const Products = () => {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery<any[]>({ queryKey: ['products'], queryFn: fetchProducts });
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const create = useMutation<any, Error, any>({
    mutationFn: (body) => postJSON('/products/', body),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['products'] })
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="flex gap-2">
          <Input placeholder="Name" value={name} onChange={(e) => setName((e.target as HTMLInputElement).value)} />
          <Input placeholder="Price (NGN)" value={price} onChange={(e) => setPrice((e.target as HTMLInputElement).value)} />
          <Button onClick={() => {
            const body = { name, description: '', price_kobo: Math.round(Number(price || 0) * 100), inventory: 0, slug: name.toLowerCase().replace(/\s+/g, '-') };
            create.mutate(body);
            setName(''); setPrice('');
          }}>Create</Button>
        </div>
      </div>

      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <div className="space-y-3">
          {Array.isArray(data) && data.length > 0 ? data.map((p: any) => (
            <div key={p.id} className="p-3 bg-muted rounded-md flex justify-between items-center">
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-muted-foreground">₦{(p.price_kobo/100).toLocaleString()}</div>
              </div>
              <div className="text-sm text-muted-foreground">Stock: {p.inventory}</div>
            </div>
          )) : <p className="text-muted-foreground">No products yet.</p>}
        </div>
      )}
    </div>
  );
};

export default Products;
