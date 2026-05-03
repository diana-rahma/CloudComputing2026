export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">Diana Rahmawati</h1>
        <p className="text-lg mb-2">
          <span className="font-semibold">NIM:</span> 2341720162
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Minat:</span> Web Development,
          UI/UX Design, dan Data Analyst
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am an Informatics student passionate about building modern web
            applications and exploring about data. I enjoy creating
            user-friendly interfaces, solving real-world problems, and learning
            new technologies.
          </p>
          <p>Currently learning Cloud Computing and DevOps</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Sistem Prestasi Mahasiswa</li>
            <li>Sistem Deteksi Pembuatan Batik</li>
            <li>IoT Smart Toll Gate</li>
          </ul>
        </div>
      </div>
    </main>
  );
}