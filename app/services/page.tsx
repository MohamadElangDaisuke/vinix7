async function getServices() {
  // simulasi data fetching (tetap sesuai tugas)
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
    <div className="space-y-6 px-4 md:px-10 lg:px-20">

      {/* Judul */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-green-800">
          Layanan Kami
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
          EduSantri Tech menyediakan berbagai layanan digital untuk mendukung
          pengelolaan akademik pesantren secara modern.
        </p>
      </div>

      {/* Card Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {services.map((item) => (
          <div
            key={item.id}
            className="p-4 md:p-5 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <h2 className="text-base md:text-lg font-semibold text-green-700">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}
