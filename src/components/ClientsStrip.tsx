import React, { useEffect, useState } from 'react';
import { Loader2, Building2 } from 'lucide-react';
import { dbOperations } from '../lib/db';
import type { Client as ClientType } from '../lib/db';

const fallbackClients = [
  'TechCorp', 'FinanceFlow', 'HealthFirst', 'RetailMax', 'ManufactPro', 'GovLink', 'InsurePlus', 'CloudNet',
];

export default function ClientsStrip() {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await dbOperations.getClients();
        if (data && data.length > 0) setClients(data);
      } catch {
        // fallback below
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const display = clients.length > 0 ? clients : fallbackClients.map((name, i) => ({ name, display_order: i } as ClientType));

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-main">
        <p className="text-center text-sm font-semibold text-ink-muted uppercase tracking-wider mb-8">
          Trusted by 500+ organizations worldwide
        </p>
        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="w-6 h-6 text-brand-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {display.map((client, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Building2 className="w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold truncate">{client.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
