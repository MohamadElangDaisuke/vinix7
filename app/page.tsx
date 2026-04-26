import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-10">

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white p-6 md:p-10 rounded-2xl shadow-lg">

        <h1 className="text-2xl md:text-4xl font-bold">
          EduSantri Tech
        </h1>

        <p className="mt-3 text-sm md:text-lg text-white/90 max-w-xl leading-relaxed">
          Platform digital untuk membantu pesantren mengelola nilai,
          data santri, dan raport secara modern, cepat, dan efisien.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">

          <button className="bg-white text-green-800 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition w-full sm:w-auto">
            Mulai Sekarang
          </button>

          <button className="border border-white px-5 py-2 rounded-lg hover:bg-white/10 transition w-full sm:w-auto">
            Pelajari Lebih Lanjut
          </button>

        </div>
      </div>

      {/* FITUR */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-green-800">
          Fitur Unggulan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

          <div className="bg-white p-4 md:p-5 rounded-xl shadow">
            <h3 className="font-semibold text-green-700">
              e-Raport Digital
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Pengolahan nilai santri secara otomatis dan terstruktur.
            </p>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-xl shadow">
            <h3 className="font-semibold text-green-700">
              Dashboard Guru
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Memudahkan guru dalam input nilai dan monitoring.
            </p>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-xl shadow">
            <h3 className="font-semibold text-green-700">
              Akses Online
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Santri dapat melihat raport kapan saja dan di mana saja.
            </p>
          </div>

        </div>
      </div>

      {/* INTERAKSI */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-green-800">
          Coba Interaksi
        </h2>

        <p className="text-sm text-gray-600">
          Contoh fitur interaktif (Client Component).
        </p>

        <div className="mt-4">
          <Counter />
        </div>
      </div>

    </div>
  );
}
