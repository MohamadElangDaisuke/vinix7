async function getServices() {
  // simulasi data fetching (biar tetap memenuhi tugas)
  return [
    {
      id: 1,
      title: "Sistem e-Raport Digital",
      desc: "Mengelola nilai santri secara otomatis dan terstruktur dalam satu platform.",
    },
    {
      id: 2,
      title: "Manajemen Data Santri",
      desc: "Menyimpan dan mengelola data santri dengan mudah dan aman.",
    },
    {
      id: 3,
      title: "Dashboard Guru",
      desc: "Memudahkan guru dalam input nilai dan monitoring perkembangan santri.",
    },
    {
      id: 4,
      title: "Akses Nilai Online",
      desc: "Santri dapat melihat nilai dan raport secara real-time.",
    },
    {
      id: 5,
      title: "Cetak Raport",
      desc: "Fitur cetak raport otomatis dengan format yang rapi dan siap digunakan.",
    },
  ];
}

export default async function Services() {
  const services = await getServices();

  return (
    <div className="space-y-6">
      
      {/* Judul */}
      <div>
        <h1 className="text-3xl font-bold text-green-800">
          Layanan Kami
        </h1>
        <p className="mt-2 text-gray-600">
          EduSantri Tech menyediakan berbagai layanan digital untuk mendukung
          pengelolaan akademik pesantren secara modern.
        </p>
      </div>

      {/* Card Services */}
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-green-700">
              {item.title}
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
