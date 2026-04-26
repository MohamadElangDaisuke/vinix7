const team = [
  {
    id: "1",
    name: "Mohamad Elang Daisuke",
    role: "Frontend Developer",
    desc: "Fokus pada pengembangan UI/UX dan integrasi frontend aplikasi e-Raport.",
  },
  {
    id: "2",
    name: "Rafi Nur Muwafiq",
    role: "Backend Developer",
    desc: "Mengelola API, database, dan logika sistem backend.",
  },
  {
  id: "3",
  name: "Zazilla Sindy Agustina",
  role: "UI/UX Designer",
  desc: "Merancang tampilan dan pengalaman pengguna aplikasi agar mudah digunakan dan nyaman."
  },
];

export default function DetailTeam({
  params,
}: {
  params: { id: string };
}) {
  const member = team.find((t) => t.id === params.id);

  if (!member) {
    return <p className="text-red-500">Data tidak ditemukan</p>;
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-green-800">
          Detail Anggota
        </h1>
      </div>

      {/* Card Detail */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-green-700">
          {member.name}
        </h2>
        <p className="text-sm text-gray-500">{member.role}</p>

        <p className="mt-3 text-gray-600">
          {member.desc}
        </p>
      </div>
    </div>
  );
}
