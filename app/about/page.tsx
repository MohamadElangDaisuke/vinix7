export default function About() {
  return (
    <div className="space-y-6">
      
      {/* Judul */}
      <div>
        <h1 className="text-3xl font-bold text-green-800">
          Tentang EduSantri Tech
        </h1>
        <p className="mt-3 text-gray-700">
          EduSantri Tech adalah platform digital yang dikembangkan untuk
          membantu pesantren dalam mengelola data akademik secara modern,
          terstruktur, dan efisien melalui sistem e-Raport berbasis web.
        </p>
      </div>

      {/* Deskripsi */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-green-700">
          Latar Belakang
        </h2>
        <p className="mt-2 text-gray-600">
          Banyak pesantren masih menggunakan sistem manual dalam pengolahan nilai,
          yang berisiko terjadi kesalahan, keterlambatan, dan sulit diakses oleh
          santri maupun orang tua. Oleh karena itu, EduSantri Tech hadir sebagai
          solusi digital untuk meningkatkan efisiensi dan transparansi dalam
          pengelolaan data akademik.
        </p>
      </div>

      {/* Visi Misi */}
      <div className="grid md:grid-cols-2 gap-4">
        
        {/* Visi */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-green-700">Visi</h2>
          <p className="mt-2 text-gray-600">
            Menjadi platform digital terdepan dalam mendukung transformasi
            pendidikan pesantren di era modern.
          </p>
        </div>

        {/* Misi */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-green-700">Misi</h2>
          <ul className="mt-2 text-gray-600 list-disc ml-5 space-y-1">
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
