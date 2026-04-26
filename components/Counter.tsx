"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition w-full sm:w-auto"
      >
        Klik ({count})
      </button>

      <p className="text-sm text-gray-600">
        Klik tombol untuk menambah counter
      </p>

    </div>
  );
}
