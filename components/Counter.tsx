"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
    >
      Klik ({count})
    </button>
  );
}
