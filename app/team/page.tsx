import Link from "next/link";

const team = [
  {
    id: 1,
    name: "Mohamad Elang Daisuke",
    role: "Frontend Developer",
    desc: "Mengembangkan tampilan dan pengalaman pengguna aplikasi e-Raport.",
  },
  {
    id: 2,
    name: "Rafi Nur Muwafiq",
    role: "Backend Developer",
    desc: "Mengelola database dan sistem backend aplikasi.",
  },
  {
  id: "3",
  name: "Zazilla Sindy Agustina",
  role: "UI/UX Designer",
  desc: "Merancang tampilan dan pengalaman pengguna aplikasi agar mudah digunakan dan nyaman."
  },
];

export default function Team() {
  return (
    <div className="space-y-6">
      
      {/* Judul */}
      <div>
        <h1 className="text-3xl font-bold text-green-800">
          Tim Kami
        </h1>
        <p className="text-gray-600 mt-2">
          Tim pengembang di balik platform EduSantri Tech.
        </p>
      </div>

      {/* Card */}
      <div className="grid md:grid-cols-2 gap-4">
        {team.map((t) => (
          <Link key={t.id} href={`/team/${t.id}`}>
            <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <h2 className="text-lg font-semibold text-green-700">
                {t.name}
              </h2>
              <p className="text-sm text-gray-500">{t.role}</p>
              <p className="mt-2 text-sm text-gray-600">
                {t.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
