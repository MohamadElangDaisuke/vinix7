export default function About() {
  return (
    <div className="space-y-6 px-4 md:px-10 lg:px-20">

      {/* Judul */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-green-800">
          Tentang EduSantri Tech
        </h1>
        <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
          EduSantri Tech adalah platform digital yang dikembangkan untuk
          membantu pesantren dalam mengelola data akademik secara modern,
          terstruktur, dan efisien melalui sistem e-Raport berbasis web.
        </p>
      </div>

      {/* Latar Belakang */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow">
        <h2 className="text-lg md:text-xl font-semibold text-green-700">
          Latar Belakang
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
          Banyak pesantren masih menggunakan sistem manual dalam pengolahan nilai,
          yang berisiko terjadi kesalahan, keterlambatan, dan sulit diakses oleh
          santri maupun orang tua. Oleh karena itu, EduSantri Tech hadir sebagai
          solusi digital untuk meningkatkan efisiensi dan transparansi dalam
          pengelolaan data akademik.
        </p>
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Visi */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-green-700">Visi</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
            Menjadi platform digital terdepan dalam mendukung transformasi
            pendidikan pesantren di era modern.
          </p>
        </div>

        {/* Misi */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-green-700">Misi</h2>
          <ul className="mt-2 text-sm md:text-base text-gray-600 list-disc ml-5 space-y-1">
            <li>Menyediakan sistem e-Raport yang mudah digunakan</li>
            <li>Meningkatkan efisiensi pengolahan nilai santri</li>
            <li>Menyediakan akses informasi akademik secara real-time</li>
            <li>Mendukung digitalisasi pesantren</li>
          </ul>
        </div>

      </div>

    </div>
  );
}
