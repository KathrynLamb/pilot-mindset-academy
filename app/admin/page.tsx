"use client";

import { useEffect, useState } from "react";

type Item = {
  email: string;
  createdAt: number;
};

export default function AdminWaitlist() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/api/admin/waitlist")
      .then((r) => r.json())
      .then((d) => setItems(d.items));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Waitlist</h1>

      <table className="w-full text-left border border-white/20">
        <thead>
          <tr>
            <th className="p-2 border-b">Email</th>
            <th className="p-2 border-b">Signed Up</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.email}>
              <td className="p-2 border-b">{i.email}</td>
              <td className="p-2 border-b">
                {new Date(i.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
