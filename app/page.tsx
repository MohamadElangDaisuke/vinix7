import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="space-y-10">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold">
          EduSantri Tech
        </h1>
        <p className="mt-4 text-lg text-white/90 max-w-xl">
          Platform digital untuk membantu pesantren mengelola nilai,
          data santri, dan raport secara modern, cepat, dan efisien.
        </p>

        <div className="mt-6 flex gap-3">
          <button className="bg-white text-green-800 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
            Mulai Sekarang
          </button>
          <button className="border border-white px-5 py-2 rounded-lg hover:bg-white/10 transition">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      {/* FITUR UTAMA */}
      <div>
        <h2 className="text-2xl font-semibold text-green-800">
          Fitur Unggulan
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-green-700">
              e-Raport Digital
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Pengolahan nilai santri secara otomatis dan terstruktur.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-green-700">
              Dashboard Guru
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Memudahkan guru dalam input nilai dan monitoring.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-green-700">
              Akses Online
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Santri dapat melihat raport kapan saja dan di mana saja.
            </p>
          </div>
        </div>
      </div>

      {/* INTERAKSI (CLIENT COMPONENT) */}
      <div>
        <h2 className="text-xl font-semibold text-green-800">
          Coba Interaksi
        </h2>
        <p className="text-gray-600 text-sm">
          Contoh fitur interaktif (Client Component).
        </p>

        <Counter />
      </div>
    </div>
  );
}
