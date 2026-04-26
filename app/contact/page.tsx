"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
    setForm({ nama: "", email: "", pesan: "" });
  };

  return (
    <div className="space-y-6 px-4 md:px-10 lg:px-20">

      {/* Judul */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-green-800">
          Hubungi Kami
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
          Jika Anda memiliki pertanyaan atau ingin bekerja sama,
          silakan hubungi kami melalui form berikut.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Info Kontak */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow space-y-3">
          <h2 className="text-lg font-semibold text-green-700">
            Informasi Kontak
          </h2>

          <p className="text-sm text-gray-600">
            📧 Email: edusantri@gmail.com
          </p>
          <p className="text-sm text-gray-600">
            📞 Telepon: 0812-3456-7890
          </p>
          <p className="text-sm text-gray-600">
            📍 Banyuwangi, Jawa Timur
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 md:p-6 rounded-xl shadow space-y-4"
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
            className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />

          <textarea
            name="pesan"
            placeholder="Pesan"
            value={form.pesan}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            Kirim Pesan
          </button>
        </form>

      </div>
    </div>
  );
}
