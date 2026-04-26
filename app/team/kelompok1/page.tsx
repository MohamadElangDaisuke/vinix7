export default function DetailTeam({
  params,
}: {
  params: { id: string };
}) {
  const team = [
    {
      id: "1",
      name: "Mohamad Elang Daisuke",
      role: "Frontend Developer",
      desc: "Mengembangkan tampilan dan pengalaman pengguna aplikasi e-Raport.",
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
      desc: "Merancang tampilan dan pengalaman pengguna aplikasi agar mudah digunakan dan nyaman.",
    },
  ];

  const member = team.find((t) => t.id === params.id);

  if (!member) {
    return (
      <p className="text-red-500 p-4">
        Data tidak ditemukan
      </p>
    );
  }

  return (
    <div className="space-y-6 px-4 md:px-10 lg:px-20">

      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-green-800">
          Detail Anggota
        </h1>
      </div>

      {/* Card */}
      <div className="bg-white p-5 md:p-6 rounded-xl shadow border border-gray-100">

        <h2 className="text-lg md:text-xl font-semibold text-green-700">
          {member.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {member.role}
        </p>

        <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
          {member.desc}
        </p>

      </div>
    </div>
  );
}
