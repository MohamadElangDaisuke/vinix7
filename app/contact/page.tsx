"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
    setForm({ nama: "", email: "", pesan: "" });
  };

  return (
    <div className="space-y-6">
      
      {/* Judul */}
      <div>
        <h1 className="text-3xl font-bold text-green-800">
          Hubungi Kami
        </h1>
        <p className="mt-2 text-gray-600">
          Jika Anda memiliki pertanyaan atau ingin bekerja sama,
          silakan hubungi kami melalui form berikut.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Info Kontak */}
        <div className="bg-white p-5 rounded-xl shadow space-y-3">
          <h2 className="text-lg font-semibold text-green-700">
            Informasi Kontak
          </h2>
          <p className="text-gray-600 text-sm">
            Email: edusantri@gmail.com
          </p>
          <p className="text-gray-600 text-sm">
            Telepon: 0812-3456-7890
          </p>
          <p className="text-gray-600 text-sm">
            Alamat: Banyuwangi, Jawa Timur
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-xl shadow space-y-4"
        >
          <h2 className="text-lg font-semibold text-green-700">
            Kirim Pesan
          </h2>

          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />

          <textarea
            name="pesan"
            placeholder="Pesan"
            value={form.pesan}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows={4}
            required
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
          >
            Kirim
          </button>
        </form>

      </div>
    </div>
  );
}
